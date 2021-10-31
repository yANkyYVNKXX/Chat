const express = require('express')
const AuthRouter = require('./routes/auth')
const cors = require('cors')
const cookie = require('cookie')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const CookieParser = require('cookie-parser')
const config = require('./config')
const { createServer } = require("http");
const {Messages, User} = require('./models/models')


const app = express()
const httpServer = createServer(app);
const io = require("socket.io")(httpServer,{cors:{origin: "http://localhost:3000", credentials: true}});


//Middleware
app.use(CookieParser('MyApp'))
app.use(express.json())
app.use(cors({origin:'http://localhost:3000', credentials:true}))
app.use('/auth', AuthRouter)

//Подключаем сервер и базу данных
const start = async ()=>{
    await mongoose.connect("mongodb+srv://root:qwer1234@cluster0.my2vv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true });
    
    httpServer.listen(config.Port,()=>{
        console.log(`сервер запущен на порте ${config.Port}`)
    })

    io.on("connection", async (socket) => {

        const cookie = socket.handshake.headers.cookie

        if (cookie)
        {
        socket.emit("messages", await returnMessages())
        
        socket.on("message",async data => {
            await sendMessage(socket, cookie, data)
        });
 
        }
        
        

        
    });


    
}

//Запускаем сервер и базу данных
start()


//Логика получения сообщений
const returnMessages = async () =>{
    const messages = await Messages.find({}).populate('user')
    const messagesFiltr = messages.map(el=> {return {message:el.message, user:el.user.login}})
    return messagesFiltr
}


//Логика отправки сообщений
const sendMessage = async (socket,cookieParse, data)=>{
    const {AcTkn} = cookie.parse(cookieParse)
    const userFromCookie = jwt.decode(AcTkn)
    const user = await User.findOne({login:userFromCookie.login})
    const message = new Messages({message:data, user:user._id})
    await message.save()
    socket.broadcast.emit("messages", await returnMessages())
    socket.emit("messages", await returnMessages())
}

const bcrypt = require('bcrypt')
const {User} = require('../models/models')
const jwt = require('jsonwebtoken')
const Router = require('express')
const config = require('../config')

const AuthRouter = Router()
module.exports = AuthRouter

//endpoint Регистрации
AuthRouter.post('/registration', async (req,res)=>{
    
    const {login, password, repeatPassword} = req.body
    try {
        if (login && password) {
       
            if (password == repeatPassword) {

        
     
            const candidate = await User.findOne({login})

            if (!candidate){
                const hashpassword = await bcrypt.hash(password, 10)
                const user = new User({login, password:hashpassword})
                await user.save()
                res.status(201).json({responseCode:1, message:'Пользователь создан'})
                return
            }

            res.json({responseCode:0, message:'Такой пользователь уже существует'})   
            return  

        }
        res.json({responseCode:0, message:'Пароли не совпадают'})
        return 
    }

    res.json({responseCode:0, message:'Обязательные поля не должны оставаться пустыми'})
    return

    }
    catch(e)
    {
        res.status(400).json(e)
    }
})


//endpoint Авторизации
AuthRouter.post('/login', async (req,res)=>{
    
    const {login, password} = req.body
    try {
        
        if (login && password) {
            const candidate = await User.findOne({login})
                
                if (candidate)  {
                    
                     const isMatch = await bcrypt.compare(password, candidate.password)
                           
                            
                             
                         if (isMatch){

                            const AccessToken = jwt.sign({login:candidate.login, password:candidate.password}, config.PrivateKey)
                                     
                            res.cookie('AcTkn',AccessToken, {
                                httpOnly:true,
                                maxAge: 9000000000,
                            })
                            res.status(200).json({responseCode:1, message:'Вы успешно авторизовались'})

                            return
                        }

                res.json ({responseCode:0, message:'Неправильный логин или пароль'})
                return         
        }
        
        res.json ({responseCode:0, message:'Неправильный логин или пароль'})
        return 
    }

    res.json ({responseCode:0, message:'Обязательные поля не должны оставаться пустыми'})
    return 
    }

    catch(e)
    {
        res.status(400).json(e)
    }
})

//endpoint аутентификации
AuthRouter.get('/me', async (req,res)=>{

    try {
        const {AcTkn} = req.cookies

        if (AcTkn) {
        const candidate = jwt.decode(AcTkn) 
        const user = await User.findOne({login:candidate.login})
            if (user)   {

                    return res.json({responseCode:1, login:user.login})
                    
            }

            res.json({responseCode:0, message:'Вы не авторизованы'})

        }

        res.json({responseCode:0, message:'Вы не авторизованы'})
    }
    catch(e)
    {
        res.status(400).json(e)
    }
})

//endpoint logout
AuthRouter.delete('/logout', (req,res)=>{

    try {
        const {AcTkn} = req.cookies

        if (AcTkn) {
            res.clearCookie('AcTkn')
            res.json({responseCode:1, message:'Вы успешно вышли из системы'})
            return
        }

       throw({responseCode:0, message:'Вы не авторизованы'})
    }
    catch(e)
    {
        res.status(400).json(e)
    }
})



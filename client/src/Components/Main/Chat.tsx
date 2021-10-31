import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { io, Socket } from "socket.io-client";
import { actions } from "../../Redux/ChatReducer";
import { getAuthReducer, getChatMessages } from "../../Selectors"
import cn from 'classnames'

let socket:Socket;

const Chat = ()=>{
    const messageLength = 150
    const emptyDIV = useRef<HTMLDivElement | null>(null)
    const [message, updMessage] = useState('')
    const dispatch = useDispatch()
    const messages = useSelector(getChatMessages)
    useEffect(()=>{
            socket = io("http://localhost:4000", {withCredentials:true});
            socket.on('messages', (data)=>{
                console.log(data)
                dispatch(actions.messagesAc(data))
                emptyDIV.current?.scrollIntoView()
        })
    },[])

    const auth = useSelector(getAuthReducer)

    const SendMessage = ()=>{
        if (message && message.length < messageLength) {
            socket.emit('message', message)
            updMessage('')
        }    
    }

    const updateMessage = (value:string) =>{
        if (value.length < messageLength) {
            updMessage(value)
        }
    }

    return(
        <div className="chat">
            <div className="chat_title">Online chat</div>
            <div className="chat_messages">
            {messages.map(message=><div>
                <div className={cn("user", {me:auth.login === message.user})}><span>{message.user}</span></div>
                <div className={cn("message", {me:auth.login === message.user})}><span>{message.message}</span></div>
                </div>)}
            <div ref={emptyDIV}></div>
            </div>
            <form onSubmit={(e)=>e.preventDefault()}>
            <div className="chat_footer">
                <input value={message} placeholder='Текст сообщения' onChange={(e)=>updateMessage(e.currentTarget.value)}></input>
                <button onClick={SendMessage}>Отправить</button>
            </div>
            </form>
        </div>
    )
}

export default Chat
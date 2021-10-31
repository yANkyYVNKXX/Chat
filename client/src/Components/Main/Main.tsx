import { Formik, Form, Field } from "formik"
import { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import '../css/main.css'
import { io, Socket } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { authThunk, loginThunk, logoutThunk } from "../../Redux/authReducer";
import { getAuthReducer, getChatMessages } from "../../Selectors";
import { actions } from "../../Redux/ChatReducer";
import Chat from "./Chat";
import Login from "./Login";
import Registration from "./Registration";

export interface valuesLogin {
    login:string
    password:string
}

export interface valuesRegistation extends valuesLogin  {
    repeatPassword:string
}
    

    const Main = ()=>{
        
    
    const auth = useSelector(getAuthReducer)
        
        
    return(
        
        <main>  
            {auth.isAuth ? <Chat/> :
         <Switch>
             <Route path='/login'><Login/></Route>
             <Route path='/registration'><Registration/></Route>
         </Switch>
         }
        </main>
    )
}









export default Main
import { valuesRegistation } from './../Components/Main/Main';
import { Dispatch } from "redux"
import { authMe, login, loginType, logout, registration } from "../Api/Api"
import { InferActions } from "./Store"

const initialState = {
    login:'',
    isAuth:false,
    initApp:false,
    error:'',
    success:'',
}

const ISAUTH = 'IS-AUTH'

const INITAPP = 'INIT-APP'

const ERROR = 'ERROR'

const SUCCESS = 'SUCCESS'

type initialStateType = typeof initialState

export default  function authReducer (state:initialStateType=initialState, action:Actions):initialStateType {
    switch (action.type){
        case ISAUTH:
            return{
                ...state,
                login:action.login,
                isAuth:action.isAuth,
                error:''
            }
        case INITAPP:
            return{
                ...state,
                initApp:action.isInit
            }    
        case ERROR:
            return{
                ...state,
                error:action.error,
                success:''
            }    
        case SUCCESS:
            return{
                ...state,
                success:action.success,
                error:''
            }    
        default:
        return state
    }

}

type Actions = InferActions<typeof actions>

export const actions = {
    authAc:(login:string, isAuth:boolean)=>({type:ISAUTH, login, isAuth} as const),
    initAppAc:(isInit:boolean)=>({type:INITAPP, isInit} as const),
    errorAc:(error:string)=>({type:ERROR, error} as const),
    successAc:(success:string)=>({type:SUCCESS, success} as const),
}


export const authThunk = (dispatch:Dispatch<Actions>) => {
    authMe()
    .then(data=> data.responseCode === 1 && dispatch(actions.authAc(data.login, true)))
    .finally(()=>dispatch(actions.initAppAc(true)))
}

export const loginThunk = (userData:loginType) => (dispatch:Dispatch<Actions>) => {
    login(userData)
    .then(response=>{
        response.responseCode === 0 ? dispatch(actions.errorAc(response.message)):
        authMe()
        .then(data=>{
            data.responseCode === 1 && dispatch(actions.authAc(data.login, true))
        } )
    })
    
}

export const logoutThunk =(dispatch:Dispatch<Actions>) => {
    logout()
    .then(()=>{
        authMe()
        .then(data=> data.responseCode === 0 && dispatch(actions.authAc(data.login, false)))
    })
    
}

export const RegistrationThunk =(userData:valuesRegistation, a:any)=>(dispatch:Dispatch<Actions>) => {
    registration(userData)
    .then((data)=>{
        if (data.responseCode === 1){
            dispatch(actions.successAc(data.message)) 
            a.resetForm()
        }
        else {
            dispatch(actions.errorAc(data.message))
        }
       })
    
}
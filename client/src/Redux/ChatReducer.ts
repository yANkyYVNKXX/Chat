import { Dispatch } from "redux"
import { authMe, login, loginType, logout } from "../Api/Api"
import { InferActions } from "./Store"

type user = {
    message:string
    user:string
}

const initialState = {
    items:[] as Array<user>
}

type initialStateType = typeof initialState

const MESSAGES = 'GET-MESSAGES'

export default  function chatReducer (state:initialStateType=initialState, action:Actions):initialStateType {
    switch (action.type){
        case MESSAGES:
            return{
                ...state,
                items:[...action.messages]
            }
        default:
        return state
    }

}

type Actions = InferActions<typeof actions>

export const actions = {
    messagesAc:(messages:Array<user>)=>({type:MESSAGES, messages} as const),
}

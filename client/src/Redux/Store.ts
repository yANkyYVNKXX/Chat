import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import chatReducer from './ChatReducer';



const rootReducer = combineReducers({
    auth: authReducer,
    chat:chatReducer
})

type reducer = typeof rootReducer
export type AppState = ReturnType<reducer>

type ActionTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActions<T extends {[key:string]:(...args:any[])=>any}> = ReturnType<ActionTypes<T>>

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
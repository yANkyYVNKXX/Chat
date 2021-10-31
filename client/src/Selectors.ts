import { AppState } from "./Redux/Store";

export const getAuthReducer = (state:AppState) => state.auth

export const getChatMessages = (state:AppState) => state.chat.items
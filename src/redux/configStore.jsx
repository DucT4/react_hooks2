import {configureStore} from '@reduxjs/toolkit';
import appChatReducer from './reducers/appChatReducer';
import modalReducer from './reducers/modalReducer';
import userReducer from './reducers/userReducer';
// import { createStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer : {
        appChatReducer:appChatReducer,
        userReducer:userReducer,
        modalReducer:modalReducer
    }
})
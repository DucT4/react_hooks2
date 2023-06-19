//rxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { customNavigate } from '../..';
import { getStoreJson, http, setStoreJson, USER_LOGIN } from '../../pages/util/config';

const initialState = {
    userLogin: getStoreJson(USER_LOGIN),
    // userLogin:{
    //     email:'khaibc43@gmail.com',
    //     accessToken:'dafdaf'
    // },
    userProfile: {

    }
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.userLogin = action.payload
        },
        setProfileAction: (state, action) => {
            state.userProfile = action.payload
        }

    }
});

export const { loginAction, setProfileAction } = userReducer.actions

export default userReducer.reducer

// async action
export const loginActionApi = (userLogin) => { //userLogin = {email, password}

    return async dispatch => {
        // xu li api
        const res = await http.post('/api/Users/signin',userLogin);
        // const res = await axios({
        //     url: 'https://shop.cyberlearn.vn/api/Users/signin',
        //     method: 'post',
        //     data: userLogin
        // });
        // sau khi đăng nhập thành công => đưa lên store
        const action = loginAction(res.data.content);
        dispatch(action)
        //đem giá trị đăng nhập thành công lưu vào localStorage
        setStoreJson(USER_LOGIN, res.data.content);

    }
}


export const getProfileApi = () => {

    return async dispatch => {
        const res = await http.post('/api/Users/getProfile')

        // const res = await axios({
        //     url: ' https://shop.cyberlearn.vn/api/Users/getProfile',
        //     method: 'Post',
        //     headers: {
        //         Authorization: `Bearer ${getStoreJson(USER_LOGIN).accessToken}`
        //     }
        // });

        if (res) {
            //đưa lên redux
            const action = setProfileAction(res.data.content);
            dispatch(action);
        }



    }
}



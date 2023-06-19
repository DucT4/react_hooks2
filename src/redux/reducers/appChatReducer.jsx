//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        {name:'Quan', content:'ahihi'},
        {name:'Vinh', content:'ahihi'}
    ]
}

const appChatReducer = createSlice({
  name: 'appChatReducer',
  initialState,
  reducers: {
    addCommentAction : (state,action) => {
        // state.arrComment = [...state.arrComment, action.payload];
        let userComment = {...action.payload};
        state.arrComment.push(userComment);
    }
  }
});

export const {addCommentAction} = appChatReducer.actions

export default appChatReducer.reducer
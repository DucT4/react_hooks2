import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    component: <p> Default</p>
}

const modalReducer = createSlice({
    name: 'modalReducer',
    initialState,
    reducers: {
        openPopupAction: (state, action) => {
            state.component = action.payload
        }
    }
});

export const { openPopupAction } = modalReducer.actions

export default modalReducer.reducer
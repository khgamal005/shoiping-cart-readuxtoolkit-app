import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name :'ui',
    initialState :{showUi :false, notification :null},
    reducers :{
        toggoleUi(state){
            state.showUi= !state.showUi
        },
        showNotification(state,action){
            state.notification={status :action.payload.status, title :action.payload.title, message:action.payload.message}
        }
    }
})

export const uiAction =uiSlice.actions
export default uiSlice;

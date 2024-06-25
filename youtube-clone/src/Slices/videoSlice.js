import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
    initialState:{
        youtTubeVideos:[],
        id:null
    },
    reducers:{
        addvideos:(state,action)=>{
            state.youtTubeVideos=action.payload
        },
        storeId:(state,action)=>{
            state.id=action.payload

        }
    }
})
export const {addvideos,storeId}=videoSlice.actions
export default videoSlice.reducer


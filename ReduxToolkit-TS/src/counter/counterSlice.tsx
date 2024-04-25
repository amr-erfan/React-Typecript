
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type InitialState={
    count:number
}

export const initialState:InitialState={count:0}
export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state:InitialState,action:PayloadAction<number>)=>{
            state.count+=action.payload
        },
        decrement:(state:InitialState,action:PayloadAction<number>)=>{
            state.count-=action.payload
        }
    }

})

export const{increment,decrement}=counterSlice.actions
export default counterSlice.reducer
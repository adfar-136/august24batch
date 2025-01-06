import { createSlice } from "@reduxjs/toolkit";

const counterSLice = createSlice({
    name: 'counter',//name
    initialState: { value:0},//initial
    reducers:{
        increment:(state,action)=>{
            state.value +=1
        },
        decrement:(state,action)=>{
            state.value -=1
        }
    }
})
export const {increment,decrement} = counterSLice.actions;
export default counterSLice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {name:"",age:0},
    reducers : {
        setUser:(state,action)=>{
            state.name = action.payload.name;
            state.age = action.payload.age;
        },
        updateAge :(state,action)=>{
            state.age = action.payload;
        }
    }
})
export const {setUser,updateAge} = userSlice.actions;
export default userSlice.reducer
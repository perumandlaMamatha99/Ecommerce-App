import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState:{
    user:""
  },
  reducers:{
    login:(state,action)=>{
      state.user=action.payload
    },
    logout:(state)=>{
      state.user=""
    },
    addcart:(state=0)=>{
      state.user=state+1;
    }
  }
});

export const { login, logout,addcart } = authSlice.actions;
export const userinfo=(state=>state.user.user);
export default authSlice;

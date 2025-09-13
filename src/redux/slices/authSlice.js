import { createSlice } from "@reduxjs/toolkit"
import { login, logout, signUpUser } from "../thunks/authThunks";

const authSlice = createSlice({
  name:"auth",
  initialState: {
  user:null,
  loading:null,
  error:null,
  },
  reducers: {
    resetAuthState: (state)=> {
      state.user = null;
      state.loading = null;
      state.error = null;
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(signUpUser.pending, (state)=>{
      state.loading = true
      state.error = false
    })
    .addCase(signUpUser.fulfilled, (state, action)=>{
      state.loading = false
      state.user= action.payload
      state.error = null
    })
    .addCase(signUpUser.rejected, (state, action)=>{
      state.loading = false
      state.error = action.payload
    })
    .addCase(login.pending, (state)=> {
      state.loading = true;
      state.error = null
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false,
      state.user = action.payload
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload,
      state.user = null
    })
    .addCase(logout.pending, (state)=> {
      state.loading = true;
      state.error = null
    })
    .addCase(logout.fulfilled, (state) => {
      state.loading = null;
      state.error = null;
      state.user = null;
    })
    .addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload,
      state.user = null
    })

  },

  })

  export const {resetAuthState} = authSlice.actions
  export default authSlice.reducer
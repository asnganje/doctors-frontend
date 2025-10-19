import { createSlice } from "@reduxjs/toolkit"
import { login, logout, signUpUser } from "../thunks/authThunks";

const authSlice = createSlice({
  name:"auth",
  initialState: {
  refreshToken:null,
  accessToken:null,
  loading:null,
  error:null
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
    .addCase(signUpUser.fulfilled, (state)=>{
      state.loading = false
      state.status= 'success'
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
      state.refreshToken = action.payload.refreshToken
      state.accessToken = action.payload.accessToken
    })
    .addCase(login.rejected, (state) => {
      state.loading = false;
      state.error = null,
      state.user = null
    })
    .addCase(logout.pending, (state)=> {
      state.loading = true;
      state.error = null
    })
    .addCase(logout.fulfilled, (state) => {
      state.loading = null;
      state.error = null;
      state.refreshToken = null;
      state.accessToken = null;
    })
    .addCase(logout.rejected, (state) => {
      state.loading = false;
      state.error = null,
      state.user = null
    })

  },

  })

  export const {resetAuthState} = authSlice.actions
  export default authSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const API_URL = "http://localhost:3000/api/v1"

export const signUpUser = createAsyncThunk("auth/signUpUser",
  async (userData, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${API_URL}/users`, {
        user: userData
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data.errors || ["Sign Up Failed"])
    }
  }
)

const authSlice = createSlice({
  name:"auth",
  initialState: {
  user:null,
  loading:null,
  error:null,
  },
  reducers: {
    logout: (state)=> {
      state.user = null
      localStorage.removeItem("user")
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
      localStorage.setItem("users", JSON.stringify(action.payload))
    })
    .addCase(signUpUser.rejected, (state, action)=>{
      state.loading = false
      state.error = action.payload
    })
  },

  })

  export const {logout} = authSlice.actions
  export default authSlice.reducer
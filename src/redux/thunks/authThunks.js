import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const API_URL = "http://localhost:3000/api/v1/users"

const signUpUser = createAsyncThunk("auth/signUpUser",
  async (userData, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${API_URL}`, {
        user: userData
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data.errors || ["Sign Up Failed"])
    }
  }
)

const login = createAsyncThunk("auth/login",
  async (userLoginInfo, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${API_URL}/sign_in`, {
        user: userLoginInfo
      })
      
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data.errors || ['Login process failed'])
    }
  }
)

export {signUpUser, login}
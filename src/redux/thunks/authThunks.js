import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"

const API_URL = "http://localhost:5000/api/v1/auth"
// const API_URL = "https://rails-doctors-api-service.onrender.com/api/v1/users"

const signUpUser = createAsyncThunk("auth/signUpUser",
  async (userData, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        ...userData
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
      const response = await axios.post(`${API_URL}/login`, {
        ...userLoginInfo
      })       
      const {accessToken, refreshToken} = response.data
      localStorage.setItem("refreshToken", refreshToken)
      localStorage.setItem("accessToken", accessToken)
      toast.success("Login successful!")    
      return response.data
    } catch (error) {
      toast.error("Login failed")
      return rejectWithValue(error.response.data.errors || ['Login process failed'])
    }
  }
)

const logout = createAsyncThunk("auth/logout",
  async ( _, {rejectWithValue}) => {
    try {
      const refreshToken = localStorage.getItem("refreshToken")           
      const response = await axios.delete(`${API_URL}/logout?refreshToken=${refreshToken}`)
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("accessToken")
      toast.success("Logout successful!")
      return response.data
    } catch (error) {
      toast.error("Logout failed!")
      return rejectWithValue(error.response?.data?.errors || ['Logout process failed'])
    }
  }
)

export {signUpUser, login, logout}
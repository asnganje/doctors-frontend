import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
// const API_URL = "http://localhost:5000/api/v1/auth"
// const API_URL = "https://doctors-api-expressjs.onrender.com/api/v1/auth"

// const API_URL = "http://localhost:3000/api/v1/users"
const API_URL = "https://rails-doctors-api-service.onrender.com/api/v1/users"


const signUpUser = createAsyncThunk("auth/signUpUser",
  async (userData, {rejectWithValue}) => {
    try {
      // rails
      const response = await axios.post(`${API_URL}`, {
        user: {...userData}
      })
      // express
      // const response = await axios.post(`${API_URL}/register`, {
      //   ...userData
      // })
      
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data.errors || ["Sign Up Failed"])
    }
  }
)

const login = createAsyncThunk("auth/login",
  async (userLoginInfo, {rejectWithValue}) => {
    try {
      // rails
      const response = await axios.post(`${API_URL}/sign_in`, {
        user: {...userLoginInfo}
      })

      const {token} = response.data
      localStorage.setItem("authToken", token)
      toast.success("Login successful!")

      // express
      // const response = await axios.post(`${API_URL}/login`, {
      //   ...userLoginInfo
      // })       
      // const {accessToken, refreshToken} = response.data
      // localStorage.setItem("refreshToken", refreshToken)
      // localStorage.setItem("accessToken", accessToken)
      // toast.success("Login successful!")
      
      return response.data
    } catch (error) {
      toast.error("Login failed")
      return rejectWithValue(error.response.data.errors || ['Login process failed'])
    }
  }
)

const logout = createAsyncThunk("auth/logout",
  async ( token, {rejectWithValue}) => {
    try {         
      // rails
      const response = await axios.delete(`${API_URL}/sign_out`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      localStorage.removeItem("authToken")
      toast.success("Logout successful!")
      // express

      // const response = await axios.delete(`${API_URL}/logout`)
      // localStorage.removeItem("accessToken")
      // toast.success("Logout successful!")

      return response.data
    } catch (error) {
      toast.error("Logout failed!")
      return rejectWithValue(error.response?.data?.errors || ['Logout process failed'])
    }
  }
)

export {signUpUser, login, logout}
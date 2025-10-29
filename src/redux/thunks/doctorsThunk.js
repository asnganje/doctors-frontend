import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const API_URL = "http://localhost:5000/api/v1/doctors"
const API_URL = "http://localhost:3000/api/v1/doctors"
// const API_URL = "https://doctors-api-expressjs.onrender.com/api/v1/doctors"
// const API_URL = "https://rails-doctors-api-service.onrender.com/api/v1/doctors"

const fetchDoctors = createAsyncThunk("doctors/fetchDoctors", 
  async(_, {rejectWithValue}) => {
    try {
      const response = await axios.get(API_URL, {
        withCredentials:true
      })  
      
      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message)
    }
  }
)

const removeDoctor = createAsyncThunk("doctors/removeDoctor",
  async(docId, {rejectWithValue}) => {
    
    try {
      const response = await axios.delete(`${API_URL}/${docId}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message)
    }
  }
)

const updateDoctor = createAsyncThunk("doctors/updateDoctor",
  async(doctorData, {rejectWithValue}) => {
    
    try {
      const formData = new FormData();
      formData.append("name", doctorData.name)
      formData.append("specialization", doctorData.specialization)
      formData.append("biography", doctorData.biography)
      if (doctorData.image) {
        formData.append("image", doctorData.image)
      }
      const response = await axios.patch(`${API_URL}/${doctorData._id}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type":"multipart/form-data"
        }
      })
      // rails
        
      // express
      return response.data.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message)
    }
  }
)

export {fetchDoctors, removeDoctor, updateDoctor}
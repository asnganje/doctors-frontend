import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const API_URL = "http://localhost:5000/api/v1/doctors"
const API_URL = "https://doctors-api-expressjs.onrender.com/api/v1/doctors"
// const API_URL = "https://rails-doctors-api-service.onrender.com/api/v1/doctors"

const addDoctor = createAsyncThunk("doctors/addDoctor",
  async(doctorData, {rejectWithValue}) => {
    
    try {
      const formData = new FormData();
      formData.append("name", doctorData.name)
      formData.append("specialization", doctorData.specialization)
      formData.append("biography", doctorData.biography)
      if (doctorData.image) {
        formData.append("image", doctorData.image)
      }      
      
      const response = await axios.post(API_URL, formData, {
        withCredentials: true,
        headers: {
          "Content-Type":"multipart/form-data"
        }
      })      
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add Doctor")
    }
  }
)

export {addDoctor}
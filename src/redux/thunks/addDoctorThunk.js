import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const API_URL = "http://localhost:3000/api/v1/doctors"
const API_URL = "https://rails-doctors-api-service.onrender.com/api/v1/doctors"

const addDoctor = createAsyncThunk("doctors/addDoctor",
  async(doctorData, {rejectWithValue}) => {
    
    try {
      const formData = new FormData()
      formData.append("doctor[name]", doctorData.name)
      formData.append("doctor[specialization]", doctorData.specialization)
      formData.append("doctor[biography]", doctorData.biography)

      if (doctorData.image) {
        formData.append("doctor[image]", doctorData.image)        
      }
      
      const response = await axios.post(API_URL, formData, {
        headers:{
          "Content-Type" : "multipart/form-data"
        }
      })

      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add Doctor")
    }
  }
)

export {addDoctor}
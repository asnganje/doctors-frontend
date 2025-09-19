import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const API_URL = "http://localhost:3000/api/v1/doctors"
const API_URL = "https://rails-doctors-api-service.onrender.com/api/v1/doctors"

const addDoctor = createAsyncThunk("doctors/addDoctor",
  async(doctorData, {rejectWithValue}) => {
    
    try {
      const payload = {
        doctor: {
          name: doctorData.name,
          specialization: doctorData.specialization,
          biography: doctorData.biography,
          image_url: doctorData.image_url || null
        }
      }       

      const response = await axios.post(API_URL, payload)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add Doctor")
    }
  }
)

export {addDoctor}
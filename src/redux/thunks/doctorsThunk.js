import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const API_URL = "http://localhost:3000/api/v1/doctors"
const API_URL = "https://rails-doctors-api-service.onrender.com/api/v1/doctors"

const fetchDoctors = createAsyncThunk("doctors/fetchDoctors", 
  async(_, {rejectWithValue}) => {
    try {
      const response = await axios.get(API_URL)
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

export {fetchDoctors, removeDoctor}
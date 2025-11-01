import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const API_URL = "http://localhost:5000/api/v1/ai"
// const API_URL = "http://localhost:3000/api/v1/ai_chat"
const API_URL = "https://rails-doctors-api-service.onrender.com/api/v1/ai_chat"
// const API_URL = "https://doctors-api-expressjs.onrender.com/api/v1/ai"

export const fetchAIResponse = createAsyncThunk('ai/fetchAIResponse',
  async (message, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${API_URL}`,
        {message},
      // express
      // const response = await axios.post(`${API_URL}/chat`,
        // {message},
        {withCredentials: true}
      )
      // rails

      // express

      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching AI Response")
    }
  }
)
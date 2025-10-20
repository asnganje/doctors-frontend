import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/ai"

export const fetchAIResponse = createAsyncThunk('ai/fetchAIResponse',
  async (message, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${API_URL}/chat`,
        {message},
        {withCredentials: true}
      )
      return response.data.response
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching AI Response")
    }
  }
)
import { createSlice } from "@reduxjs/toolkit";
import { fetchAIResponse } from "../thunks/aiThunk";

const aiSlice = createSlice({
  name: "ai",
  initialState: {
    loading: false,
    response:"",
    error: null
  },
  reducers: {
    clearResponse: (state) => {
      state.response = ""
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAIResponse.pending, (state)=> {
      state.loading=true;
      state.error=null
    })
    .addCase(fetchAIResponse.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
      state.error = false
    })
    .addCase(fetchAIResponse.rejected, (state, action)=> {
      state.loading = false;
      state.response = "";
      state.error = action.payload
    })
  }
})

export const {clearResponse} = aiSlice.actions
export default aiSlice.reducer;
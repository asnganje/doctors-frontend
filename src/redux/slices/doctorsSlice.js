import { createSlice } from "@reduxjs/toolkit";
import { fetchDoctors, removeDoctor, updateDoctor } from "../thunks/doctorsThunk";
import { addDoctor } from "../thunks/addDoctorThunk";

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [],
    loading: null,
    error: null
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
    .addCase(fetchDoctors.pending, (state)=> {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchDoctors.fulfilled, (state, action)=> {
      state.loading = false;
      state.doctors = action.payload;
      state.error = null;
    })
    .addCase(fetchDoctors.rejected, (state) => {
      state.loading = false;
      state.error = null; 
    })
    .addCase(addDoctor.pending, (state) => {
      state.loading = true;
      state.error = null; 
    })
    .addCase(addDoctor.fulfilled, (state, action) => {
      state.loading = false;
      state.doctors.push(action.payload); 
      state.error = null
    })
    .addCase(addDoctor.rejected, (state) => {
      state.loading = false;
      state.error = null;
    })
    .addCase(removeDoctor.pending, (state) => {
      state.loading = true;
      state.error = null; 
    })
    .addCase(removeDoctor.fulfilled, (state, action) => {
      state.loading = false;
      state.doctors = state.doctors.filter((doc)=> doc.id !== action.payload.doctor_id); 
      state.error = null
    })
    .addCase(removeDoctor.rejected, (state) => {     
      state.loading = false;
      state.error = null;
    })
    .addCase(updateDoctor.pending, (state) => {
      state.loading = true;
      state.error = null; 
    })
    .addCase(updateDoctor.fulfilled, (state, action) => {
      state.loading=false 
      state.doctors = state.doctors.map((doc) =>
        doc.id === action.payload.id ? action.payload : doc
      ) 
      state.error = null
    })
    .addCase(updateDoctor.rejected, (state) => {
      state.loading = false;
      state.error = null;
    })
  }
})

export default doctorsSlice.reducer 
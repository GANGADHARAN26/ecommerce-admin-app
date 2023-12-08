import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import colorService from "./colorService";
export const getColors = createAsyncThunk(
  "color/get-colors",
  async (thunkApi) => {
    try {
      return await colorService.getColors();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
const initialState = {
  colors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getColors.pending, (state) => {
        state.isError = true;
      })
      .addCase(getColors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.colors = action.payload;
      })
      .addCase(getColors.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default colorSlice.reducer;
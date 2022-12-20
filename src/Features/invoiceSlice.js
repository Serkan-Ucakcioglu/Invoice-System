import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: [],
};

const invoiceSlice = createSlice({
  name: "invoiceSlice",
  initialState,
  reducers: {},
});

export default invoiceSlice.reducer;

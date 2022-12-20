import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: [],
};

const invoiceSlice = createSlice({
  name: "invoiceSlice",
  initialState,
  reducers: {},
});

export const selectedInvoice = (state) => state.invoiceSlice.invoice;
export default invoiceSlice.reducer;

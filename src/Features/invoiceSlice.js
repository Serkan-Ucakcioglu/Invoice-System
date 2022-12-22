import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: [],
  productList: [
    {
      name: "se",
      quantity: "",
      price: "",
    },
  ],
};

const invoiceSlice = createSlice({
  name: "invoiceSlice",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.productList.push(payload);
    },
  },
});

export const selectedProductList = (state) => state.invoiceSlice.productList;
export const selectedInvoice = (state) => state.invoiceSlice.invoice;
export const { addProduct } = invoiceSlice.actions;
export default invoiceSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: [],
  productList: [],
};

const invoiceSlice = createSlice({
  name: "invoiceSlice",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.productList.push(payload);
    },
    updateProduct: (state, { payload }) => {
      state.productList = state.productList.map((product) => {
        if (product.id === payload.id) {
          return { ...payload };
        } else {
          return product;
        }
      });
    },
  },
});

export const selectedProductList = (state) => state.invoiceSlice.productList;
export const selectedInvoice = (state) => state.invoiceSlice.invoice;
export const { addProduct, updateProduct, addTotal, deleteProduct } =
  invoiceSlice.actions;
export default invoiceSlice.reducer;

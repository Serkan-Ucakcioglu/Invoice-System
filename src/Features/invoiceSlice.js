import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: [],
  productList: [
    {
      id: 1,
      name: "",
      quantity: 0,
      price: 0,
      total: 0,
    },
  ],
  total: 0,
};

const invoiceSlice = createSlice({
  name: "invoiceSlice",
  initialState,
  reducers: {
    deleteProduct: (state, { payload }) => {
      state.productList = state.productList.filter((product) => {
        if (product.id !== 1) {
          return product.id !== payload;
        }
      });
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
export const { updateProduct, addTotal, deleteProduct } = invoiceSlice.actions;
export default invoiceSlice.reducer;

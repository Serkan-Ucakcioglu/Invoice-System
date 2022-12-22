import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: [],
  productList: [
    {
      id: 1,
      name: "",
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
    deleteProduct: (state, { payload }) => {
      state.productList = state.productList.filter((product) => {
        if (product.id !== 1) {
          return product.id !== payload;
        } else {
          return product;
        }
      });
    },
  },
});

export const selectedProductList = (state) => state.invoiceSlice.productList;
export const selectedInvoice = (state) => state.invoiceSlice.invoice;
export const { addProduct, deleteProduct } = invoiceSlice.actions;
export default invoiceSlice.reducer;

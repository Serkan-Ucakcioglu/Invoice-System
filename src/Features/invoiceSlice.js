import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: [],
  productList: JSON.parse(localStorage.getItem("invoiceList")) || [],
  selecteds: {},
};

const invoiceSlice = createSlice({
  name: "invoiceSlice",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const check = state.productList.find(
        (invoice) => invoice.email === payload.email
      );
      if (!check) {
        state.productList.push(payload);
        localStorage.setItem("invoiceList", JSON.stringify(state.productList));
      } else {
        return { ...payload };
      }
    },
    selectProduct: (state, { payload }) => {
      const test = state.productList.filter((obj) => obj.id === payload);
      const test2 = test.reduce((acc, arr) => (acc = arr), {});
      state.selecteds = test2;
    },
  },
});

export const selectedObj = (state) => state.invoiceSlice.selecteds;
export const selectedProductList = (state) => state.invoiceSlice.productList;
export const selectedInvoice = (state) => state.invoiceSlice.invoice;
export const {
  selectProduct,
  addProduct,
  updateProduct,
  addTotal,
  deleteProduct,
} = invoiceSlice.actions;
export default invoiceSlice.reducer;

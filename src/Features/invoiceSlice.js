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
      let check = state.productList.find(
        (invoice) => invoice.email === payload.email
      );
      if (!check) {
        state.productList.push(payload);
      } else {
        state.productList = state.productList.map((obj) => {
          if (obj.id === payload.id) {
            return { ...payload };
          }
          return obj;
        });
      }
      localStorage.setItem("invoiceList", JSON.stringify(state.productList));
    },
    selectProduct: (state, { payload }) => {
      const selectedID = state?.productList.filter((obj) => obj.id === payload);
      const selectedObj = selectedID?.reduce((acc, arr) => (acc = arr), {});
      state.selecteds = selectedObj;
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

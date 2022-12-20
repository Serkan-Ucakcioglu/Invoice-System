import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "../Features/invoiceSlice";

const store = configureStore({
  reducer: {
    invoiceSlice,
  },
});

export default store;

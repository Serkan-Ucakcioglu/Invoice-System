import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import CreateInvoice from "../Features/Invoice/CreateInvoice";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<CreateInvoice />} />
      <Route path="/:id" element={<CreateInvoice />} />
    </Route>
  )
);

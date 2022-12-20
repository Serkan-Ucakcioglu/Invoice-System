import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";

export const router = createHashRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
);

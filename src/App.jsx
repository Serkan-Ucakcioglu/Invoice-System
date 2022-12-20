import { Outlet } from "react-router-dom";
import Sidebar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="App flex h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;

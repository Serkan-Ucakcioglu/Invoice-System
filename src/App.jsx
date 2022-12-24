import { Outlet } from "react-router-dom";
import Sidebar from "./Components/SideBar/SideBar";
import Form from "./FormContext/Form";

function App() {
  return (
    <div className="App flex h-screen">
      <Form>
        <Sidebar />
        <Outlet />
      </Form>
    </div>
  );
}

export default App;

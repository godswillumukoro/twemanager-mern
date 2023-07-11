import { Button } from "antd";
// import "antd/dist/antd.css";
import '../index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
      <h1>Twinwaters Event Management Application</h1>
      <Button type="primary">Primary Button</Button>
    </>
  );
}

export default App;

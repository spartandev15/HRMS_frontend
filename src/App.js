import "./App.css";
import Login from "./pages/Login";
import LeaveManagement from "./pages/LeaveManagement";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/leave" element={<LeaveManagement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

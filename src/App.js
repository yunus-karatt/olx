import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;

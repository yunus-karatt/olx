import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { FirebaseContextProvider } from "./store/FirebaseContext";

function App() {
  return (
    <div className="App">
      <FirebaseContextProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </FirebaseContextProvider>
    </div>
  );
}

export default App;

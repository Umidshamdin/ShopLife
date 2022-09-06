
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import RomansList from "./pages/RomansList";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import RomansDetail from "./components/RomansDetail/RomansDetail";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Router>
        
        <>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RomansList" element={<RomansList />} />
            <Route path="/RomanDetail" element={<RomansDetail />} />
            <Route path="/Login" element={<Login />} />

          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;

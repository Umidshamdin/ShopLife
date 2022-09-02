
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import BestsellerPage from "./pages/BestsellerPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <Router>
        
        <>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bestsellerpage" element={<BestsellerPage />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;

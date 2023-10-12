import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import NgoPage from "./Pages/NgoPage";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/ngopage" element={<NgoPage/>} />
          </Routes>
          <Footer/>
     </Router>
  );
}

export default App;

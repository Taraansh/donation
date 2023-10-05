import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
      <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
     </Router>
  );
}

export default App;

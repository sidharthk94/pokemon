import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
import LoginPage from "./Components/loginPage/LoginPage";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/home/Home";
import Earn from "./Components/earn/Earn";

function App() {
  const auth = localStorage.getItem("login");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Earn" element={<Earn />}></Route>
      </Routes>
    </div>
  );
}

export default App;

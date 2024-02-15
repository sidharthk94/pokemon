import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setLogin(true);
    }
  }, []);
  
  return (
    <div className="LandingPage">
      <h1 style={{color:"yellow"}}> Welcome to Pokemons !</h1>
      <div>
        {login ? (
          <Link to="Dashboard">Goto Dashboard</Link>
        ) : (
          <Link to="LoginPage">Goto Login Page</Link>
        )}
      </div>
    </div>
  );
};

export default LandingPage;

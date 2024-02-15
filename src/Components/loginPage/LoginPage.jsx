import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPassword, setUserName } from "../../Redux/Slice";

const LoginPage = () => {
  const emails = useSelector((state) => state.sliceReducer.userName);
  const password = useSelector((state) => state.sliceReducer.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emails === "admin" && password === "password") {
      localStorage.setItem("login", true);
      navigate("/Dashboard");
    } else {
      setError(true);
      setErrorMsg("usename or password mismatch");
      console.log("yyyyyyyyyyyy");
    }
  };

  useEffect(() =>{
    setError(false)
  },[emails, password])

  return (
    <div className="loginPage">
      <div className="formMain">
        <h3>Pokemons</h3>
        <p>
          Don't have an account yet?<span className="signUp">Sign up</span>
        </p>
        <section>{error ? <div className="errorMsg"> {errorMsg}</div> : null}</section>
        <form onSubmit={handleSubmit}>
          <div className="emailInput">
            <p htmlFor="email">Email</p>
            <div>
              <input
                type="text"
                id="email"
                onChange={(e) => dispatch(setUserName(e.target.value))}
                required
              />
            </div>
          </div>
          <div>
            <p htmlFor="password">Password</p>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              required
            />
          </div>
          <div className="submit">
            <button type="submit" className="submitButton">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

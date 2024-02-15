import React from "react";
import "./NavBar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import {
  setDashboard,
  setEarn,
  setHamburger,
  setHome,
} from "../../Redux/Slice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hamburger = useSelector((state) => state.sliceReducer.hamburger);
  const home = useSelector((state) => state.sliceReducer.home);
  const dashboard = useSelector((state) => state.sliceReducer.dashboard);
  const earn = useSelector((state) => state.sliceReducer.earn);

  const handleHome = () => {
    dispatch(setHome(true));
    dispatch(setDashboard(false));
    dispatch(setEarn(false));
  };
  const handleDashboard = () => {
    dispatch(setHome(false));
    dispatch(setDashboard(true));
    dispatch(setEarn(false));
  };
  const handleEarn = () => {
    dispatch(setHome(false));
    dispatch(setDashboard(false));
    dispatch(setEarn(true));
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/LoginPage");
  };

  const handleHamburger = () => {
    dispatch(setHamburger());
  };

  const handleNavLink = () => {
    dispatch(setHamburger());
  };
  return (
    <div>
      <div className="navBar">
        <div>
          <h3 className="pokiHeading">Pokemons</h3>
          <div className="hamberger" onClick={handleHamburger}>
            <GiHamburgerMenu />
          </div>
        </div>
        <div className="navLinks">
          <Link
            to="/Home"
            className={home ? "home" : "link"}
            onClick={handleHome}
          >
            Home
          </Link>
          <Link
            to="/Dashboard"
            className={dashboard ? "dashboard" : "link"}
            onClick={handleDashboard}
          >
            Dashboard
          </Link>
          <Link
            to="/Earn"
            className={earn ? "earn" : "link"}
            onClick={handleEarn}
          >
            Earn
          </Link>
        </div>
        {hamburger ? (
          <div className="HamNavLinks">
            <Link to="/Home" className="link" onClick={handleNavLink}>
              Home
            </Link>
            <Link to="/Dashboard" className="link" onClick={handleNavLink}>
              Dashboard
            </Link>
            <Link to="/Earn" className="link" onClick={handleNavLink}>
              Earn
            </Link>
          </div>
        ) : null}

        <div onClick={handleLogout} style={{ cursor: "pointer" }}>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

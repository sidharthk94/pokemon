import React from "react";
import "./Dashboard.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="dashBordContent">
        <div className="sideBarr">
          <SideBar />
        </div>
        <div className="eeee">
          <div className="SlideAndgraph">
            <div className="slide">
              <div className="abc">
                <h2 className="revenue">Revenue</h2>
                <div className="rrrr">
                  <h1 className="ammount">$2,454</h1>
                  <div>
                    <span className="value">-11.5</span>
                    <span>
                      <FaArrowDown className="downIcon" />
                    </span>
                  </div>
                </div>
                <p className="comparePara">Compare to last (2019)</p>
              </div>
              <div className="abc">
                <h2 className="revenue">Sales</h2>
                <div className="rrrr">
                  <h1 className="ammount">$6,982</h1>
                  <div>
                    <span className="valueSales">8.2</span>
                    <span>
                      <FaArrowUp className="upIcon" />
                    </span>
                  </div>
                </div>
                <p className="comparePara">Compare to last (2019)</p>
              </div>
              <div className="abc">
                <h2 className="revenue">Costs</h2>
                <div className="rrrr">
                  <h1 className="ammount">$8,310</h1>
                  <div>
                    <span className="valueSales">0.7</span>
                    <span>
                      <FaArrowUp className="upIcon" />
                    </span>
                  </div>
                </div>
                <p className="comparePara">Compare to last (2019)</p>
              </div>
            </div>

            <div className="graph">
              <img src="./graph1.png" alt="dddd" className="graphImage" />
            </div>
          </div>

          <div className="monthAndgraph">
            <div className="monthTaget">
              <img src="./month_target.png" alt="" className="targetimage" />
            </div>
            <div className="monthTaget">
              <img src="./graph3.png" alt="" className="targetimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

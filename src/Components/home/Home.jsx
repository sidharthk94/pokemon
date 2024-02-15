import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import { IoEyeSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "./Home.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setData, setSelectedItem, setShowPopup } from "../../Redux/Slice";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [limit, setLimit] = useState(0);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.sliceReducer?.data);
  const showPopup = useSelector((state) => state.sliceReducer.showPopup);
  const selectedItem = useSelector((state) => state.sliceReducer.selectedItem);

  console.log(data, "jjjjjjjjjjj");

  const togglePopup = (item) => {
    dispatch(setShowPopup());
    dispatch(setSelectedItem(item));
  };

  useEffect(() => {
    const getApiData = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
      );
      dispatch(setData(response?.data?.results));
    };
    getApiData();
  }, []);

  useEffect(() => {
    setLimit(data?.length);
  }, [data]);

  console.log(limit, "limitttt");
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <NavBar />
      <div className="homeContent">
        <SideBar />
        <div className="wraperz">
          <div className="tableWraper">
            <table className="table">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                {currentItems?.map((data, index) => (
                  <tr key={index} className="tableData">
                    <td className="index">{index + 1}</td>
                    <td className="name">{data?.name}</td>
                    <td className="url">{data?.url}</td>
                    <td onClick={() => togglePopup(data)} className="details">
                      <IoEyeSharp />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="paginationButtons">
              {indexOfFirstItem <= 0 ? (
                <button disabled className="nextButton">
                  <FaArrowLeft />
                </button>
              ) : (
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className="nextButton"
                >
                  <FaArrowLeft />
                </button>
              )}
              {limit > indexOfLastItem ? (
                <button
                  onClick={() => paginate(currentPage + 1)}
                  className="nextButton"
                >
                  <FaArrowRight />
                </button>
              ) : (
                <button disabled className="nextButton">
                  <FaArrowRight />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Details</h3>
            <p>Name: {selectedItem?.name}</p>
            <div>
              <a href={selectedItem?.url} target="blank">Url: {selectedItem?.url}</a>
            </div>
            <button onClick={() => togglePopup(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

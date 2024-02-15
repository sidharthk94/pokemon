import React from "react";
import "./SideBar.css";
import { CiMail } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaProjectDiagram } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../../Redux/Slice";

const SideBar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sliceReducer.show);
  console.log(show, "kkkkkkkk");
  const handleShow = () => {
    dispatch(setShow());
  };
  return (
    <div className="sidebar">
      <div className="main" onClick={handleShow}>
        <p>APPS</p>
        <div style={{ marginRight: "10px", cursor: "pointer" }}>
          {show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
      </div>
      {show ? (
        <div>
          <div className="sub">
            <CiMail />
            <p>Mail</p>
          </div>
          <div className="sub">
            <IoChatbubbleEllipsesOutline />
            <p>Chat</p>
          </div>
          <div className="sub">
            <SlCalender />
            <p>Calender</p>
          </div>
          <div className="sub">
            <FaProjectDiagram />
            <p>Project</p>
          </div>
        </div>
      ) : null}
      <div className="extra">General</div>
      <div className="extra">Layout</div>
    </div>
  );
};

export default SideBar;

import React from "react";
import "./Dashboard.css";
import logo from "../assets/logo.png";
import f1 from "../assets/first.png";
import s1 from "../assets/second.png";
import t from "../assets/third.png";
import f2 from "../assets/fourth.png";
import f3 from "../assets/fifth.png";
import s2 from "../assets/sixth.png";
import vector from "../assets/vector.png";

function dashboard() {
  return (
    <div className="sideMenu">
      <div className="logoD">
        <img className="logo" src={logo} alt="" />
        <p>Dashboard v0.1</p>
      </div>
      <div className="otherElD">
        <div className="el">
          <div className="lolD">
            <img src={f1} alt="" className="icon" />
            <p>Dashboard</p>
          </div>

          <img src={vector} alt="" className="vector" />
        </div>
        <div className="el">
          <div className="lolD">
            <img src={s1} alt="" className="icon" />
            <p>Product</p>
          </div>

          <img src={vector} alt="" className="vector" />
        </div>
        <div className="el active">
          <div className="lolD">
            <img src={t} alt="" className="icon" />
            <p>Customers</p>
          </div>

          <img src={vector} alt="" className="vector" />
        </div>
        <div className="el" >
          <div className="lolD">
            <img src={f2} alt="" className="icon" />
            <p>Income</p>
          </div>

          <img src={vector} alt="" className="vector" />
        </div>
        <div className="el">
          <div className="lolD">
            <img src={f3} alt="" className="icon" />
            <p>Promote</p>
          </div>

          <img src={vector} alt="" className="vector" />
        </div>
        <div className="el">
          <div className="lolD">
            <img src={s2} alt="" className="icon" />
            <p>Help</p>
          </div>
          <img src={vector} alt="" className="vector" />
        </div>
      </div>
    </div>
  );
}

export default dashboard;

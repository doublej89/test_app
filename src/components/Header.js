import React from "react";

import { ReactComponent as Menu } from "../icons/menu.svg";
import { ReactComponent as Dash } from "../icons/dashboard.svg";
import { ReactComponent as Bell } from "../icons/notification.svg";
import { ReactComponent as Expand } from "../icons/full-screen.svg";

export default function Header() {
  return (
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="header-logo">
        {/* <img
            src={menu}
            color={"#D5D5D5"}
            fill="#D5D5D5"
            style={{ width: 20, color: "#D5D5D5" }}
          /> */}
        <Menu style={{ width: 20, fill: "#d5d5d5" }} />
        <div className="header-logo-titles">
          <h3>Welcome Back</h3>
          <h2>Customer Name Here</h2>
        </div>
      </div>
      <div className="header-items">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: 30,
          }}
        >
          <h3>credits</h3>
          <h2 style={{ color: "blue" }}>$2000</h2>
        </div>
        <div
          style={{
            width: 40,
            height: 20,
            borderRadius: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#D5D5D5",
            marginRight: 30,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: "white",
              marginLeft: 4,
            }}
          ></div>
        </div>
        <Dash style={{ width: 20, fill: "#d5d5d5" }} />
        <Bell style={{ width: 20, fill: "#d5d5d5" }} />
        <Expand style={{ width: 20, fill: "#d5d5d5" }} />
        <h3 style={{ color: "#B4B4B4", marginLeft: 30, marginRight: 30 }}>
          Jawad
        </h3>
        <div className="profile-pic"></div>
      </div>
    </header>
  );
}

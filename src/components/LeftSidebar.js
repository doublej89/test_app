import React from "react";
import timer from "../icons/timer.svg";

export default function LeftSidebar() {
  return (
    <div className="col-sm-1 left-sidebar" style={{ height: "100%" }}>
      <div className="sidebar-list-item">
        <img src={timer} style={{ width: 20 }} />
        <h4>Dashoards</h4>
        <div className="left-border"></div>
      </div>
      <div className="sidebar-list-item">
        <img src={timer} style={{ width: 20 }} />
        <h4>Campaigns</h4>
        <div className="left-border" style={{ backgroundColor: "blue" }}></div>
      </div>
      <div className="sidebar-list-item">
        <img src={timer} style={{ width: 20 }} />
        <h4>Contacts</h4>
        <div className="left-border"></div>
      </div>
      <div className="sidebar-list-item">
        <img src={timer} style={{ width: 20 }} />
        <h4>Reports</h4>
        <div className="left-border"></div>
      </div>
      <div style={{ paddingTop: 20, paddingLeft: 10 }}>
        <h6 style={{ fontSize: 11, fontWeight: "normal" }}>Channels</h6>
        <div className="sub-list">
          <div
            className="sub-list-item"
            style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}
          >
            <img src={timer} style={{ width: 20 }} />
            <h4>Manages</h4>
            <div className="left-border"></div>
          </div>
          <div className="sub-list-item">
            <img src={timer} style={{ width: 20 }} />
            <h4>Manages</h4>
            <div className="left-border"></div>
          </div>
          <div className="sub-list-item">
            <img src={timer} style={{ width: 20 }} />
            <h4>Manages</h4>
            <div className="left-border"></div>
          </div>
        </div>
      </div>
      <div className="sidebar-list-item">
        <img src={timer} style={{ width: 20 }} />
        <h4>Manages</h4>
        <div className="left-border"></div>
      </div>
      <div className="sidebar-list-item">
        <img src={timer} style={{ width: 20 }} />
        <h4>Help & Support</h4>
        <div className="left-border"></div>
      </div>
    </div>
  );
}

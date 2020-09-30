import React from "react";
import { ReactComponent as Phone } from "../icons/smartphone.svg";

export default function RightSidebar() {
  return (
    <div
      className="col-sm-3 right-sidebar"
      // style={{ backgroundColor: "black", height: "100%" }}
    >
      <div className="input-bundle">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: 10,
          }}
        >
          <label>Total Contacts</label>
          <input type="text" placeholder="05" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Total Contacts</label>
          <input type="text" placeholder="05" />
        </div>
      </div>
      <div className="input-bundle">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: 10,
          }}
        >
          <label>Total Contacts</label>
          <input type="text" placeholder="05" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Total Contacts</label>
          <input type="text" placeholder="05" />
        </div>
      </div>
      <Phone style={{ width: "100%", fill: "#d5d5d5", marginTop: 20 }} />
    </div>
  );
}

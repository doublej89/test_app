import React from "react";
import logo from "./logo.svg";
import "./App.css";
import menu from "./icons/menu.svg";
import dash from "./icons/dashboard.svg";
import bell from "./icons/notification.svg";
import expand from "./icons/full-screen.svg";
import timer from "./icons/timer.svg";
import Header from "./components/Header";
import { ReactComponent as Phone } from "./icons/smartphone.svg";
import { ReactComponent as Envelope } from "./icons/envelope.svg";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="row" style={{ height: "100vh" }}>
          <LeftSidebar />
          <MainContent />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;

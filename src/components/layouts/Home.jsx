import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
import { Outlet } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      {token ? (
        <>
          <div className="App">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="content">
              <div className="head">
                <Header />
              </div>
              <div className="body">
                <div className="content1">
                  <Outlet />
                </div>
                <div className="footer">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>{(window.location.href = "/login")}</>
      )}
    </div>
  );
};

export default Home;

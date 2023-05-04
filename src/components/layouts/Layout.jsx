import React from 'react'
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
// import Content from "../layouts/Content";
import Footer from "../layouts/Footer";
import "./Layout.css";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App">
    <div className="sidebar"><Sidebar /></div>
    <div className="content">
      <div className="head"><Header /></div>
      <div className="body">
        <div className="content1"><Outlet /></div>
        <div className="footer"><Footer /></div>
      </div>
    </div>
  </div>
  )
}

export default Layout
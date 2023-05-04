import React from "react";
import "./Header.css";

const handleLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

const Header = () => {
  return (
    <div className="header">
      <div></div>
      <div>Header</div>
      <div>
        <button className="header_button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;

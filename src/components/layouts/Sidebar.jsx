import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    console.log("Dashboard");
    navigate("/dashboard");
  };

  const handleAbout = () => {
    console.log("About");
    navigate("/about");
  };

  const handleContact = () => {
    console.log("Contact");
    navigate("/contact");
  };
  return (
    <div>
      Sidebar
      <div>
        <div>
          <button onClick={handleDashboard}>Dashboard</button>
        </div>
        <div>
          <button onClick={handleAbout}>About</button>
        </div>
        <div>
          <button onClick={handleContact}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

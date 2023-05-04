import React from "react";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  return (
    <div>{token ? <>Dashboard</> : <>{(window.location.href = "/login")}</>}</div>
  );
};

export default Dashboard;

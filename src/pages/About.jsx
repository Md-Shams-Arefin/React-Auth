import React from "react";

const About = () => {
  const token = localStorage.getItem("token");

  return (
    <div>{token ? <>About</> : <>{(window.location.href = "/login")}</>}</div>
  );
};

export default About;

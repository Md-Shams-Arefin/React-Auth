import React from "react";

const Contact = () => {
  const token = localStorage.getItem("token");

  return (
    <div>{token ? <>Contact</> : <>{(window.location.href = "/login")}</>}</div>
  );
};

export default Contact;

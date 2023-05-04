import React from "react";

const Error = () => {
  const token = localStorage.getItem("token");

  return (
    <div>{token ? <>Error</> : <>{(window.location.href = "/login")}</>}</div>
  );
};

export default Error;

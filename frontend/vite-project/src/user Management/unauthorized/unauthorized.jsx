// src/userManagement/Unauthorized/unauthorized.jsx

import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Unauthorized Access</h1>
      <p>You do not have permission to view this page.</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back to the homepage
      </Link>
    </div>
  );
};

export default Unauthorized;

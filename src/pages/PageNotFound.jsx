// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/">Go back Home</Link>
    </div>
  );
}

export default PageNotFound;

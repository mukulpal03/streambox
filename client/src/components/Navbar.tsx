import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/upload">Upload</Link>
    </nav>
  );
};

export default Navbar;

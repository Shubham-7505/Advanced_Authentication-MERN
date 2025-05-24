import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-6 py-3 sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold">
        AuthSystem
      </Link>

      <div className="flex space-x-6 text-lg">
        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="border border-white px-4 py-1 rounded hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="p-4 md:flex md:items-center bg-white shadow-md border-b border-[#8c8c8c] sticky top-0 z-50">
      <div className="text-[#326C85] text-3xl font-bold m-3">
        AlumniConnect
      </div>
      <div className="hidden md:flex space-x-12 ml-auto">
        <Link
          to="/"
          className="nav-link font-medium px-3 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#f0f4f8] hover:shadow-lg"
        >
          Home
        </Link>
        <Link
          to="/event"
          className="nav-link font-medium px-3 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#f0f4f8] hover:shadow-lg"
        >
          Events
        </Link>
        <Link
          to="/donate"
          className="nav-link font-medium px-3 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#f0f4f8] hover:shadow-lg"
        >
          Donate
        </Link>
        <Link
          to="/job-portal"
          className="nav-link font-medium px-3 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#f0f4f8] hover:shadow-lg"
        >
          Job Portal
        </Link>

        <div className="relative mt-2" ref={dropdownRef}>
          <span
            className="nav-link font-medium cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#f0f4f8] hover:shadow-lg px-3 py-2 rounded-lg"
            onClick={toggleDropdown}
          >
            Registration
          </span>
          {dropdownOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-[#333] shadow-lg border border-[#555] rounded-lg w-64">
<Link
                to="/register-college"
                className="dropdown-item block px-4 py-2 font-medium text-white hover:bg-[#444] transition-transform duration-300 ease-in-out rounded-lg"
                onClick={closeDropdown}
              >
                Register As College
              </Link>
              <Link
                to="/register-alumni"
                className="dropdown-item block px-4 py-2 font-medium text-white hover:bg-[#444] transition-transform duration-300 ease-in-out rounded-lg"
                onClick={closeDropdown}
              >
                Register As an Alumni
              </Link>
              <Link
                to="/register-student"
                className="dropdown-item block px-4 py-2 font-medium text-white hover:bg-[#444] transition-transform duration-300 ease-in-out rounded-lg"
                onClick={closeDropdown}
              >
                Register As a Student
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/contact"
          className="nav-link font-medium px-3 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#f0f4f8] hover:shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

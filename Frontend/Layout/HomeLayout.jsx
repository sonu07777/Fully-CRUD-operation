import React from "react";
import logo from "../src/assets/capLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../src/Redux/Slice/AuthSlice";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);
  // console.log(isLoggedIn,role);

  async function handelLogout(e) {
    e.preventDefault();
    const res = await dispatch(logout());
    // console.log(res);

    if (res?.payload?.success) navigate("/");
  }

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 md:px-8">
        <div className="text-lg font-semibold flex items-center gap-2  w-[150px]">
          <img src={logo} alt="Logo" className="" />
        </div>
        <div className="hidden md:flex gap-6 text-gray-700">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/contactUs" className="hover:underline">
            Contact Us
          </Link>
          {isLoggedIn && role === "ADMIN" && (
            <Link to="/adminDashboard" className="hover:underline">
              Admin Dashboard
            </Link>
          )}

          <Link to="/aboutUs" className="hover:underline">
            About us
          </Link>
        </div>
        {!isLoggedIn && (
          <div className="flex gap-2">
            <button className="border border-gray-500 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
              <Link to="/signup"> Sign in</Link>
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              <Link to="/login"> Login </Link>
            </button>
          </div>
        )}

        {isLoggedIn && (
          <div className="flex gap-2">
            <button className="border border-gray-500 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
              <Link to="/user/profile">Profile</Link>
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              <Link onClick={handelLogout}> Logout </Link>
            </button>
          </div>
        )}
      </nav>

      {children}
    </div>
  );
};

export default LandingPage;

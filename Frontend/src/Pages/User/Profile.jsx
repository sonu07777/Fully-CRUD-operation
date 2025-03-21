// import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import HomeLayout from "../../../Layout/HomeLayout.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteAccount } from "../../Redux/Slice/AuthSlice.js";
// import toast from "react-hot-toast";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.auth?.data);
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);
  async function onDelete(e) {
    e.preventDefault();

    const response = await dispatch(deleteAccount());
    if (response?.payload?.success) navigate("/signup");
  }

  return (
    <HomeLayout>
      <div className="flex justify-center items-center  bg-white p-4  h-full">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-6 border-b pb-4">
            <div className="relative w-16 h-16">
              <img
                src={userData?.avatar?.secure_url}
                alt="Profile"
                className="w-16 h-16 rounded-full border "
              />
              <Link
                to="/user/editProfile"
                className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
                <FaEdit className="text-gray-600" />
              </Link>
            </div>
            <h2 className="text-xl font-semibold">My Profile</h2>
            {isLoggedIn && role == "ADMIN" && (
              <button onClick={onDelete} className="ml-auto text-red-500 flex items-center gap-1 hover:text-red-600 cursor-pointer">
                <FaTrash /> Delete Account
              </button>
            )}
          </div>

          {/* Profile Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 text-sm">Full Name</label>
              <input
                type="text"
                value={userData?.fullName}
                className="w-full p-2 border rounded-md cursor-not-allowed outline-none"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm">Role</label>
              <input
                type="text"
                value={userData?.role}
                className="w-full p-2 border rounded-md  cursor-not-allowed outline-none"
                readOnly
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600 text-sm">Email</label>
              <input
                type="email"
                value={userData?.email}
                readOnly
                className="w-full p-2 border rounded-md  cursor-not-allowed outline-none"
              />
            </div>

            <div className="col-span-2 flex justify-start gap-2">
              <Link
                to="/"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                Go Back
              </Link>
              <Link
                to="/changePassword"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                  change Password
              </Link>
              <Link
                to="/user/editProfile"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                 Edit Profile
              </Link>
            </div>
            <div className="col-span-2 flex justify-start">
             
            </div>
          </form>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ProfilePage;

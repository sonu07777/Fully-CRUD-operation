import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/Slice/AuthSlice";
import { isEmail, isValidPassword } from "../AxiosInstance/regex";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    // console.log(e);
    setSignupData({
      ...signupData,
      [name]: value,
    });
  }

  function getImage(event) {
    event.preventDefault();
    // getting the image or Getting the Uploaded Image File
    const uploadedImage = event.target.files[0];
    // Updating the State with the Uploaded Image:
    if (uploadedImage) {
      setSignupData({
        ...signupData,
        avatar: uploadedImage,
      });
      // Reading the Image as a Data URL (for Preview):
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      //Displaying the Preview Image:
      fileReader.addEventListener("load", function () {
        setPreviewImage(this.result);
      });
    }
  }

  async function createNewAccount(event) {
    event.preventDefault();
    if (
      !signupData.email ||
      !signupData.password ||
      !signupData.fullName ||
      !signupData.avatar
    ) {
      toast.error(`Please fill all the details`);
      return;
    }
    // checking name field length
    if (signupData.fullName.length < 5) {
      toast.error("Name should be at least of 5 characters");
      return;
    }
    // checking valid email
    if (!isEmail(signupData.email)) {
      toast.error("Invalid email id");
      return;
    }
    // checking password validation
    if (!isValidPassword(signupData.password)) {
      toast.error(
        "Password should be 6 - 16 character long with atleast a number and special character"
      );
      return;
    }
    const formData = new FormData();
    formData.append("fullName", signupData.fullName);
    formData.append("email", signupData.email);
    formData.append("password", signupData.password);
    formData.append("avatar", signupData.avatar);
    const response = await dispatch(createAccount(formData));
    console.log(response);

    if (response?.payload?.success) {
      navigate("/login");
    }
    setSignupData({
      fullName: "",
      email: "",
      password: "",
      avatar: "",
    });
    setPreviewImage("");
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-xl overflow-hidden bg-white shadow-lg">
        {/* Left Section - Image (Hidden on small screens) */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 bg-green-100 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mt-4">
              Get started for free
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Join Trendhunt today and take control of your investments.
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-4" noValidate onSubmit={createNewAccount}>
            <label htmlFor="image_upload">
              {previewImage ? (
                <img
                  src={previewImage}
                  className="w-24 h-24 rounded-full m-auto "
                  alt=""
                />
              ) : (
                <BsPersonCircle className="w-24 h-24 rounded-full m-auto mb-1 mt-[-1rem]" />
              )}
            </label>
            <input
              onChange={getImage}
              type="file"
              className="hidden"
              id="image_upload"
              accept="jpg png jpeg svg"
              name="image_upload"
            />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              name="fullName"
              value={signupData.fullName}
              onChange={handleUserInput}
            />
            <input
              type="email"
              placeholder="email"
              required
              name="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleUserInput}
              value={signupData.email}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                name="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={handleUserInput}
                value={signupData.password}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
              Sign up with Email
            </button>
          </form>

          <p className="text-gray-500 text-xs text-center mt-4">
            By continuing with Google, Apple, or Email, you agree to Trendhunt's
            <a href="" className="text-green-600">
              {" "}
              Terms of Service{" "}
            </a>{" "}
            and
            <a href="" className="text-green-600">
              {" "}
              Privacy Policy
            </a>
            .
          </p>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
              🍏
            </button>
            <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
              ❌
            </button>
            <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
              🔵
            </button>
            <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
              🟡
            </button>
          </div>

          <p className="text-gray-500 text-sm text-center mt-6">
            Already signed up?{" "}
            <span className="text-green-600">
              <Link to="/login">{""} Go to login </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

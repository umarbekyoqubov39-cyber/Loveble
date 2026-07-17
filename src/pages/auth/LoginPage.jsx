import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import LeftArrow from "../../components/Icons/LeftArrow";
function LoginPage() {
  // let [form, setForm] = useState("");
  let emailRef = useRef();
  let passwordRef = useRef();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const res = await fetch(
        `https://tevoj98108.pythonanywhere.com/auth/login/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();
      localStorage.setItem("access", data.data.access);
      navigate("/admin");
      console.log(data);

      if (!res.ok) {
        throw new Error("Login xatosi");
      }

      console.log("Login muvaffaqiyatli!");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 center gap-20">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-8">
        <div className="flex flex-col gap-10 my-10 items-start">
          <img src="/Link.svg" alt="" />
          <Link to={"/"}>
            <Button
              variant="danger"
              text={"back to Home"}
              LeftArrow={LeftArrow}
            ></Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>

        <p className="mt-2 text-gray-500">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              ref={emailRef}
              required
              placeholder="name@example.com"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              ref={passwordRef}
              required
              placeholder="••••••••"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-200 shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8">
          Don't have an account?{" "}
          <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
      <div className="bg-gray-200 hidden lg:block">
        <img src="/login.svg" alt="" />
      </div>
    </div>
  );
}

export default LoginPage;

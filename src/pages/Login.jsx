import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { email, password } = user;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.error("Error signing in:", error);
    }
  };
  return (
    <div className="h-screen ">
      <div className="container mx-auto flex justify-center ">
        <div className="bg-slate-300 mt-10 w-1/2 py-10 px-5 rounded-lg">
          <h2 className="mb-20 text-xl font-semibold capitalize text-black text-center">
            Login with email and password
          </h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="w-2/12 text-sm font-semibold capitalize mb-1">
              Email :
            </label>
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                autoComplete="off"
                className="border-b-2 border-pink-200 outline-none mb-5 w-full rounded px-2 py-1 text-sm"
                onChange={handleChange}
              />
            </div>
            <label className="w-2/12 text-sm font-semibold capitalize mb-1">
              password :
            </label>
            <div className="w-full">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="off"
                className="border-b-2 border-pink-200 outline-none mb-5 w-full rounded px-2 py-1 text-sm"
                onChange={handleChange}
              />
            </div>
            <p className="capitalize text-md font-semibold">
              don't have accout? get{" "}
              <Link className="text-pink-600 font-bold" to={"/singup"}>
                Register
              </Link>{" "}
              Here
            </p>
            <button
              className="mt-5 py-2 px-4 bg-pink-400 rounded text-lg font-semibold uppercase"
              type="submit"
            >
              {isLoading ? "request sending....." : "submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fireDB, auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
const Register = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { firstName, lastName, email, password } = user;

    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    // Create a new user in Firestore
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // Update the user's data in Firestore
      const userRef = doc(fireDB, "users", auth.currentUser.uid);
      await setDoc(userRef, {
        firstName,
        lastName,
        email,
        role: "user",
        id: auth.currentUser.uid,
      });

      setIsLoading(false);
      navigate("/login"); // Redirect to login after successful signup
    } catch (error) {
      setIsLoading(false);
      console.error("Error creating user:", error.message);
    }
  };
  return (
    <div className="h-screen ">
      <div className="container mx-auto flex justify-center ">
        <div className="bg-slate-300 mt-10 w-1/2 py-10 px-5 rounded-lg">
          <h2 className="mb-5 text-xl font-semibold capitalize text-black text-center">
            create an account
          </h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="w-2/12 text-sm font-semibold capitalize mb-1">
              first name :
            </label>
            <div className="w-full">
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                autoComplete="off"
                className="border-b-2 border-pink-200 outline-none mb-5 w-full rounded px-2 py-1 text-sm"
                onChange={handleChange}
              />
            </div>
            <label className="w-2/12 text-sm font-semibold capitalize mb-1">
              last name :
            </label>
            <div className="w-full">
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name "
                autoComplete="off"
                className="border-b-2 border-pink-200 outline-none mb-5 w-full rounded px-2 py-1 text-sm"
                onChange={handleChange}
              />
            </div>
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
              already have account ?{" "}
              <Link className="text-pink-600 font-bold" to={"/login"}>
                Login
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

export default Register;

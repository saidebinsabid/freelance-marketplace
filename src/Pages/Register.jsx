import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, updateUser, createUserGoogle, loading, setLoading } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true);

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

 
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      setLoading(false);
      return;
    } else {
      setNameError("");
    }

   
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must have at least 1 uppercase, 1 lowercase letter, and be at least 6 characters long."
      );
      setLoading(false);
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
            });
            toast.success("Successfully registered!");
            setLoading(false);
            navigate(location.state?.from?.pathname || "/", { replace: true });
          })
          .catch(() => {
            setUser(user);
            toast.success("Successfully registered!");
            setLoading(false);
            navigate(location.state?.from?.pathname || "/", { replace: true });
          });
      })
      .catch((error) => {
        toast.error(error.message || "Registration failed. Please try again.");
        setLoading(false);
      });
  };

  const handleSignInGoogle = () => {
    setLoading(true);
    createUserGoogle()
      .then((result) => {
        const user = result.user;
        const name = user.displayName || "Google User";
        const photo = user.photoURL || "";
        const email = user.email;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
              email: email,
            });
            toast.success("Successfully registered with Google!");
            setLoading(false);
            navigate(location.state?.from?.pathname || "/", { replace: true });
          })
          .catch(() => {
            // console.error("Error updating user profile:", error);
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
              email: email,
            });
            toast.success("Successfully registered with Google!");
            setLoading(false);
            navigate(location.state?.from?.pathname || "/", { replace: true });
          });
      })
      .catch((error) => {
        toast.error(error.message || "Registration failed. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="w-11/12 mx-auto flex flex-col items-center space-y-6 my-16">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold">
          Welcome to Kaj<span className="text-indigo-500">Kori</span>.com
        </h2>
        <p className="text-gray-600">
          Join us and simplify your workflow. <br />
  Find or post freelance tasks — fast, secure, and hassle-free.
        </p>
        <button onClick={handleSignInGoogle} className="btn mt-6">
          <FcGoogle size={20} /> Sign up with Google
        </button>
        <br />
        <h1 className="text-gray-400">
          .........................<span className="text-black">OR</span>..........................
        </h1>
      </div>

      <form onSubmit={handleRegister} className="w-full max-w-sm mx-auto px-4">
        <fieldset className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              name="name"
              type="text"
              className="input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
              required
            />
            {nameError && <p className="text-red-400 text-xs">{nameError}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="https://example.com/photo.jpg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Password"
              required
            />
            {passwordError && <p className="text-red-400 text-xs">{passwordError}</p>}
          </div>
          <button
            type="submit"
            className="btn w-full py-3 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold rounded-lg"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="font-semibold text-center">
            Already Have An account?{" "}
            <Link className="text-secondary" to="/auth/login">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;

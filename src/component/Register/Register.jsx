import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    setError("");
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("User created:", result.user);
        setSuccess(true);
      })
      .catch((err) => {
        console.error("ERROR:", err);
        setError(err.message);
        setSuccess(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-lg mx-auto mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset relative">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input pr-10 w-full"
                  placeholder="Email"
                />

                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input w-full pr-10"
                    name="password"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <button className="btn btn-neutral mt-4">Register</button>

                {/* show error */}
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-600">Sign Up Successful</p>}
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;

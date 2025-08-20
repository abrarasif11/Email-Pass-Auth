import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";

const Register = () => {
  const [error, setError] = useState("");
  const [success,setSuccess] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    setError("");
    setSuccess(false)

  
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("User created:", result.user);
        setSuccess(true)
      })
      .catch((err) => {
        console.error("ERROR:", err);
        setError(err.message);
        setSuccess(false)
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-lg mx-auto mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>

                {/* show error */}
                {error && <p className="text-red-500">{error}</p>}
                {
                success && <p className="text-green-600">Sign Up Successful</p>
                }
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;

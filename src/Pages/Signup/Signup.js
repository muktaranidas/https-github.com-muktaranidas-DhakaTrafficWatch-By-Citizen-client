import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser, signUpWithGoogle } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const base_url = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("User  Successfully Created");

        const userInfo = {
          displayName: data.name,
          userInfo: data.role,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.role);
          })
          .catch((err) => console.error(err));
      })

      .catch((err) => {
        console.error(err);
        setSignUpError(err.message);
      });
  };

  const handleGoogleSignUp = () => {
    return signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User  Successfully Created");
      })
      .catch((err) => console.error(err));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch(
      `${base_url}/add-user`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div className="w-96 px-10 pb-5 border rounded bg-slate-100">
        <h2 className="text-2xl text-center text-pink-600 my-4 font-bold border-b pb-2">
          Please Signup
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)} className="">
          <div className="form-control w-full max-w-xs">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">User Type</span>
              </label>
              {/* user type */}
              <select
                {...register("role")}
                className="input input-bordered w-full max-w-xs"
              >
                <option value="" defaultChecked>
                  Select
                </option>
                <option value="admin">admin</option>
                <option value="monitor-officer">monitor-officer</option>
                <option value="customer">customer</option>
              </select>
              {errors.role && (
                <p className="text-red-600"> {errors.role.message}</p>
              )}
            </div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600"> {errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character",
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600"> {errors.password.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent my-4 w-full"
            value="signup"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p>
          Already have a account?
          <Link to="/login" className="text-secondary">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignUp} className="btn btn-primary w-full">
          SignUp WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;

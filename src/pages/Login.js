import React from "react";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <div className="py-5 d-flex justify-content-center align-items-center" style={{ background: "#FFB52E", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />
          <CustomInput type="text" label="Password" id="pass" />
          <button className="border-0 px-3 py-2 text-white fw-bold w-100" style={{ background: "#FFB52E" }} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

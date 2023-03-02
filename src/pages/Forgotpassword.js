import React from "react";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <div className="py-5 d-flex justify-content-center align-items-center" style={{ background: "#FFB52E", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Forgot Password</h3>
        <p className="text-center">Enter the email to reset your password.</p>
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />
          <button className="border-0 px-3 py-2 text-white fw-bold w-100" style={{ background: "#FFB52E" }} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Login;

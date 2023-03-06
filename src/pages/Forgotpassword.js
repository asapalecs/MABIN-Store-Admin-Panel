import React from "react";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <div
      className="py-5 d-flex justify-content-center align-items-center"
      style={{ background: "#FFB52E", minHeight: "100vh" }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Forgot Password</h3>
        <p className="text-center">Enter Your Email To Reset Your Password.</p>
        <form action="">
          <CustomInput type="email" label="Email" id="email" />
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#FFB52E" }}
            type="submit"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};
export default Forgotpassword;

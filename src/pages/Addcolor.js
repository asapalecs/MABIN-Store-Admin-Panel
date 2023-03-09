import React from "react";
import CustomInput from "../components/CustomInput";

const Addcolor = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Color</h3>
      <div>
        <form action="">
          <CustomInput type="color" label="New Color" />
          <button
            className="btn btn-success border-0 rounded-3 my-3"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcolor;

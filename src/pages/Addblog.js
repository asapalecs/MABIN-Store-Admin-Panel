import React, {useState} from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Addblog = () => {
  const [desc, setDesc] = useState("");
  const handleDesc = (e) =>{
  }
  return (
    <div className="mb-4">
      <h3 className="mb-4">Add Blog</h3>
      <div className="">
        <form action="">
          <CustomInput type="text" label="Enter Blog Title" />
          <select name="" id="">
            <option value="">Select Blog Category</option>
          </select>
          <ReactQuill theme="snow" value={desc} onChange={(evt) =>{ handleDesc(evt)}} />
        </form>
      </div>
    </div>
  );
};

export default Addblog;

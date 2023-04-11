import React, { useState } from "react";
import axios from "axios";

const DeleteCall = () => {
  const data = { fname: "", lname: "" };
  const [inputData, setInputData] = useState(data);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="fname"
        value={inputData.fname}
        onChange={handleData}
      />
      <br />
      <input
        type="text"
        name="lname"
        value={inputData.lname}
        onChange={handleData}
      />
      <br />

      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default DeleteCall;

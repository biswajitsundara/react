import React, { useState } from "react";

const Child = (props) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getData(name);
  };

  const handleChange = (e) =>{
    setName(e.target.value);
    console.log(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Child;

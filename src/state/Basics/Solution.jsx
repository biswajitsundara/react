import { useState } from "react";

const Solution = () => {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(23);

  const clickHandler = () => {
    setName("Jenny Clark");
    setAge(30);
  };

  return (
    <div>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={clickHandler}>Change Name</button>
    </div>
  );
};

export default Solution;

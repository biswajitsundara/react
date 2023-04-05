import React from "react";

/** Even if we click on the button and change the variable name
 *  The updated name will not appear on the screen
 */
const Problem = () => {
  let name = "John Doe";

  const clickHandler = () => {
    name = "Jany Clark";
    console.log(name);
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={clickHandler}>Change Name</button>
    </div>
  );
};

export default Problem;

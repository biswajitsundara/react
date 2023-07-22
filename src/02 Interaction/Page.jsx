import React, { useState } from "react";
import Message from "./Message";

/** The usecase is about component interaction
 *  So if we click on the button, it should open another component
 *  This will be helpful incase of modal, popups etc.
 */

const Page = () => {

  const [showMessage, setShowMessage] = useState(false);

  const displayMessage = () => {
    setShowMessage(true);
  };

  return (
    <>
      <button onClick={displayMessage}>Click Me</button>
      {showMessage && <Message />}
    </>
  );
  
};

export default Page;

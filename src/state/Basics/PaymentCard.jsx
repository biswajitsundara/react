import { useState } from "react";

/**
 * Another simple use case
 */

const PaymentCard = () => {
  const [message, setPayment] = useState(
    "You have an outstanding bill amount of $100"
  );
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setPayment("Your bill is paid")}>Pay</button>
    </div>
  );
};

export default PaymentCard;

const BooleanObject = () => {
  const married = false;
  const address = {
    street: "12 Park Street",
    pin: 75012,
  };
  return (
    <div>
      <p>{`${married}`}</p>
      <p>{JSON.stringify(address)}</p>
      <p>{address.street}</p>
    </div>
  );
};

export default BooleanObject;

const DataTypes = () => {
  const bankname = "BisBank";
  const balance = 5000;
  const fruits = ["Apple", "Mango", "Strawberry"];

  return (
    <div>
      <h1>{bankname}</h1>
      <p>The bank name is {bankname}</p>
      <p>{balance}</p>
      <p>{fruits}</p>

      <p>{"Biswajit"}</p>
      <p>{30}</p>
      <p>{["savings", "current"]}</p>
    </div>
  );
};

export default DataTypes;

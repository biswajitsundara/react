const Parameterized = () => {
    
  const clickHandler = (userName) => {
    console.log(`Hello ${userName}`);
  };

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          clickHandler("Alia");
        }}
      >
        Hello
      </button>
      <button onClick={() => clickHandler("Katrina")}>Another Hello</button>
    </div>
  );
};

export default Parameterized;

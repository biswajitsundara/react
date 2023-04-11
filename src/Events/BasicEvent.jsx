const BasicEvent = () => {
    
  const greetHandler = () => {
    alert("Hello User");
  };

  const meetHandler = (event, name) => {
    console.log(event);
    alert(`Good to meet you ${name}`);
  };

  return (
    <div>
      <button onClick={greetHandler}>Greet</button>
      <button onClick={(event) => meetHandler(event, "Biswajit")}>Meet</button>
    </div>
  );
};

export default BasicEvent;

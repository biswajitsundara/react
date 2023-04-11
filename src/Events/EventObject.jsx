const EventObject = () => {
    
  const clickHandler = (userName, event) => {
    console.log(`Hello ${userName}`);
    console.log(event.target);
    console.log(event);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={(event) => clickHandler("Katrina", event)}>Hello</button>
    </div>
  );
};

export default EventObject;

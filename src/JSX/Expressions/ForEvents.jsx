const ForEvents = () => {
  function clickHandler() {
    console.log("Hello World");
  }

  return (
    <div>
      <button onClick={clickHandler}>Hello</button>
    </div>
  );
};

export default ForEvents;

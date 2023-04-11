const Child = (props) => {
  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={props.increment}>Increment</button>
    </div>
  );
};

export default Child;
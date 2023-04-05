const ExpressionEval = () => {
  const validProfile = true;
  return (
    <div>
      <p>{5000 + 5000}</p>
      <p>{Math.random() * 10}</p>
      <p className="messages">
        {validProfile ? "valid profile" : "invalid profile"}
      </p>
    </div>
  );
};

export default ExpressionEval;

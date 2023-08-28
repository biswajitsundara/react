const ErrorFallBack = ({ error, resetBoundary }) => {
  const resetFunction = () => {
    window.location.reload();
  };
  //console.log(resetBoundary);

  return (
    <>
      <div role="alert">
        <p>Something went wrong!</p>
        <pre>{error.message}</pre>
        <button onClick={resetFunction}>Try Again</button>
      </div>
    </>
  );
};

export default ErrorFallBack;

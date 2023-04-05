const ForAttributes = () => {
  const appName = "Bis Bank";
  const link = "https://google.com";

  return (
    <div>
      <h1 id="header">{appName}</h1>
      <p className="messages">Hello World</p>
      <a href={link}>Google.com</a>
    </div>
  );
};

export default ForAttributes;

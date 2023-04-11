const Link = (props) => {
  return (
    <div>
      <a href="">
        <h3>{props.title}</h3>
      </a>
      <p>{props.content}</p>
    </div>
  );
};

export default Link;

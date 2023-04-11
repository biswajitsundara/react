const ListItem = () => {
  const names = ["Kareena", "Anushka", "Alia"];

  return (
    <div>
      {names.map((name) => {
        return <h1 key={name}>{name}</h1>;
      })}
    </div>
  );
};

export default ListItem;

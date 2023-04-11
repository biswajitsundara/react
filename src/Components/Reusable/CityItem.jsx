const CityItem = ({ city }) => {
  return (
    <ul>
      <li>Name: {city.name}</li>
      <li>Country: {city.country}</li>
      <li>Population: {city.population}</li>
    </ul>
  );
};

export default CityItem;

import CityItem  from "./CityItem";
import { citiesData } from "./Data";

const Cities = () => {
  const citiesList = citiesData.map((city) => (
    <CityItem city={city} key={city.id} />
  ));

  return <div>{citiesList}</div>;
};

export default Cities;

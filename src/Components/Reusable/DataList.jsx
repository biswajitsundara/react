import { citiesData } from "./Data";

const DataList = () => {

  //Approach 1 using loop  
  const citiesList = [];
  for (let i = 0; i < citiesData.length; i++) {
    const city = <li>{citiesData[i].name}</li>;
    citiesList.push(city);
  }

  //Approach 2 using map
  const citiesList1 = citiesData.map((city) => <li>{city.name}</li>);

  //Approach 3 using map with key
  const citiesList2 = citiesData.map((city) => (
    <li key={city.id}>{city.name}</li>
  ));

  return (
    <>
      <ul>{citiesList}</ul>
      <ul>{citiesList1}</ul>
      <ul>{citiesList2}</ul>
    </>
  );
};

export default DataList;

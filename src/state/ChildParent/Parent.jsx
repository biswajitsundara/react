import Child from "./Child";

const Parent = () => {
  const getData = (data) => {
    console.log(data);
  };
  return <Child getData={getData} />;
};

export default Parent;

import axios from "axios";
import React, { useEffect, useState } from "react";

const GetCall = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUserData(response.data);
    });
  }, []);

  const userLists = userData.map((userItem) => {
    return <div>{userItem.name}</div>;
  });

  return (
    <div>
      <h1>User Data</h1>
      {userLists}
    </div>
  );
};

export default GetCall;
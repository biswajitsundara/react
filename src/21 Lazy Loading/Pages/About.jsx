import React, { useState, useEffect } from "react";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </>
  );
};

export default About;

import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/postsz")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if(data.length < 1){
    return new Error('There is an error');
  }
  
  return (
    <>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </>
  );
};

export default Home;

import React, {useState} from 'react';

const PostBlog = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="UserId"
        value={userId}
        onChange={(event) => setUserId(event.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostBlog;

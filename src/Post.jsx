import React, { useState, useEffect } from "react";

export const Post = ({ page }) => {
  const [postData, setPostData] = useState({});

  useEffect(() => {
    setPostData({ title: "Loading ...", body: "...", id: 0 });
    setTimeout(
      () =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${page}`)
          .then((response) => response.json())
          .then((json) => setPostData(json)),
      500
    );
  }, [page]);

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
      <p>ID: {postData.id}</p>
    </div>
  );
};

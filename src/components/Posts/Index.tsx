import React from "react";

import "./posts.css";

interface ReceivedPosts {
  title: string;
  imageUrl: string;
  description: string;
}
function Posts({ title, imageUrl, description }: ReceivedPosts) {
  return (
    <main id="post-content">
      <img src={imageUrl} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </main>
  );
}
export default Posts;

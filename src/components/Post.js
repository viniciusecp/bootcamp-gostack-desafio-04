import React from "react";

import Comment from "./Comment";

import "./Post.css";

function Post({ data: post }) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={post.author.avatar} alt="Avatar" />
        <div className="details">
          <strong>{post.author.name}</strong>
          <span>{post.date}</span>
        </div>
      </div>

      <span className="content">{post.content}</span>

      <div className="divider" />

      {post.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}

export default Post;

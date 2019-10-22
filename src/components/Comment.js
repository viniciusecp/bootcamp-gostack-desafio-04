import React from "react";

import "./Comment.css";

function Comment({ data: comment }) {
  return (
    <div key={comment.id} className="comments">
      <img src={comment.author.avatar} alt="Avatar" />
      <span>
        <strong>{comment.author.name}</strong> {comment.content}
      </span>
    </div>
  );
}

export default Comment;

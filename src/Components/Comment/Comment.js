import React from "react";

export const Comment = ({ comment, removeCommentHandler }) => {
  return (
    <div className="media-body comment">
      <div>
        <h5 className="mt-0 mb-1">{comment.author}</h5>
        <span>{comment.comment}</span>
        <small>
          {comment.time} {comment.date}
        </small>
      </div>
      <button
        type="button"
        className="btn btn-outline-dark btn-sm"
        onClick={() => removeCommentHandler(comment.id)}
      >
        &times;
      </button>
    </div>
  );
};
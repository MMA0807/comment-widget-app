import React from "react";

export const Comments = ({ comments, removeCommentHandler }) => {
  return (
    <ul className="list-group mt-5">
      {comments.map((comment) => (
        <li className="media list-group-item mb-4" key={comment.id}>
          <div className="media-body comment">
            <div>
              <h5 className="mt-0 mb-1">{comment.name}</h5>
              <span>{comment.value}</span>
              <small>{comment.time} {comment.date} </small>
            </div>
            <button 
              type="button" 
              className="btn btn-outline-dark btn-sm"
              onClick={() => removeCommentHandler(comment.id)}
            >
              &times;
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

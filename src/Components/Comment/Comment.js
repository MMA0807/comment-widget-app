import React from "react";

export const Comment = ({ item, removeComment }) => {
  const {id, author, comment, date} = item

  return (
    <li className="media list-group-item mb-4">
      <div className="media-body comment">
        <div>
          <h2 className="mt-0 mb-1 h5">{author}</h2>
          <span className="text-muted">{comment}</span>
          <small className="text-muted">{date}</small>
        </div>
        <button
          type="button"
          className="btn btn-outline-dark btn-sm"
          onClick={() => removeComment(id)}
        >
          &times;
        </button>
      </div>
    </li>
  );
};

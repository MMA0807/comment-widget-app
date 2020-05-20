import React from "react";
import { Comment } from "./Comment";
import "./comment.scss";

export const CommentList = ({ comments, removeCommentHandler }) => {
  return (
    <ul className="list-group mt-5">
      {comments.map((comment) => (
        <li className="media list-group-item mb-4" key={comment.id}>
          <div className="media-body comment">
            <Comment comment={comment} />
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

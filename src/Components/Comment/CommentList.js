import React from "react";
import { Comment } from "./Comment";
import "./comment.scss";

export const CommentList = ({ comments, removeComment }) => {
  return (
    <ul className="list-group mt-5">
      {comments.map((item) => (
        <li className="media list-group-item mb-4" key={item.id}>
          <Comment  
            item={item} 
            removeComment={removeComment} 
          />
        </li>
      ))}
    </ul>
  );
};

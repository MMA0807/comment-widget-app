import React from "react";
import { Comment } from "./Comment";
import "./comment.scss";

export const CommentList = ({ item, removeComment }) => {
  return (
    <ul className="list-group mt-5">
      {item.map((item) => (
            <Comment 
              key={item.id}
              item={item}
              removeComment={removeComment}  
            />
      ))}
    </ul>
  );
};

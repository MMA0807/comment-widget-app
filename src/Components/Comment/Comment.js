import React from "react";

export const Comment = ({comment}) => {
  return (
    <div>
      <h5 className="mt-0 mb-1">{comment.name}</h5>
      <span>{comment.value}</span>
      <small>
        {comment.time} {comment.date}
      </small>
    </div>
  );
};

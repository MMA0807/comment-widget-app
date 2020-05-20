import React from "react";
import { CommentList } from "./CommentList";

const CommentListContainer = ({ comments, removeCommentHandler }) => (
  <CommentList
    comments={comments}
    removeCommentHandler={removeCommentHandler}
  />
);

export default CommentListContainer;

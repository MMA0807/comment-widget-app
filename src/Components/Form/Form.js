import React from "react";

export const Form = ({ comments, submitHandler, handleChange }) => {
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group row">
        <label htmlFor="commentAuthor" className="col-sm-2 col-form-label">
          Имя
        </label>
        <div className="col-sm-10">
          <input
            id="commentAuthor"
            name="author"
            type="text"
            className="form-control"
            placeholder="Введите свое Имя..."
            required
            value={comments.author}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="commentBox" className="col-sm-2 col-form-label">
          Ваш комментарий
        </label>
        <div className="col-sm-10">
          <textarea
            id="commentBox"
            rows="3"
            name="comment"
            type="text"
            className="form-control"
            placeholder="Оставьте свой комментарий..."
            required
            value={comments.comment}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary mt-4">
            Отправить
          </button>
        </div>
      </div>
    </form>
  );
};
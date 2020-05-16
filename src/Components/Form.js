import React, { useState } from "react";

export const Form = ({addCommentHandler}) => {
  const [name, setName] = useState("");
  const [commentText, setValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (commentText.trim() && name.trim()) {
      addCommentHandler(name, commentText)
      setValue("")
      setName("")
    } else {
      alert('Введите данные.')
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group row">
        <label htmlFor="commentAuthor" className="col-sm-2 col-form-label">
          Имя
        </label>
        <div className="col-sm-10">
          <input
            id="commentAuthor"
            type="text"
            className="form-control"
            placeholder="Введите свое Имя..."
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            type="text"
            className="form-control"
            placeholder="Оставьте свой комментарий..."
            value={commentText}
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="submit" className="btn btn-primary mt-4">Отправить</button>
        </div>
      </div>
    </form>
  );
};

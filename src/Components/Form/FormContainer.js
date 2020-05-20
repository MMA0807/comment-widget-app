import React, { useState } from "react";
import Form from './Form'

const FormContainer = ({addCommentHandler}) => {
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
    <Form 
      submitHandler={submitHandler}
      name={name}
      setName={setName}
      commentText={commentText}
      setValue={setValue}  
    />
  );
};

export default FormContainer
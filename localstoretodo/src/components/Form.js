
import React, { useState } from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, alert, setAlert }) => {
 

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 1500);
    } else {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
    
      <form>
        <div>
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            className="todo-input"
          />
          <button
            onClick={submitTodoHandler}
            className="todo-button"
            type="submit"
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </div>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;

import React, { useEffect, useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import {motion} from "framer-motion";
import {dangerAnim} from "./animations"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [alert, setAlert] = useState(false);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
      console.log(todoLocal);
    }
  };

  return (
    <div  className="App">
      <header>Peti's Todo List</header>
      <Form
        alert={alert}
        setAlert={setAlert}
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
    {alert === true &&(  <motion.div exit="exit"
        variants={dangerAnim}
        initial="hidden"
        animate="show" className="alert">
        
          <Alert variant="danger">
            <Alert.Heading>Type in some todo</Alert.Heading>
          </Alert>
        
      </motion.div>)}
      <TodoList
        filteredTodos={filteredTodos}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;

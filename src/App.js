import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import Todos from './MyComponents/Todos';
import About from './MyComponents/About';

// App component
function App() {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialTodos);

  // Save todos to local storage whenever they are updated
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to handle deletion of todos
  const handleDelete = (sno) => {
    setTodos(todos.filter(todo => todo.sno !== sno));
  };

  // Function to add a todo item
  const addTodo = (title, desc) => {
    const sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const newTodo = { sno, title, desc };
    setTodos([...todos, newTodo]);
  };

  return (
    <Router>
      <Header title="My Todos List" />

      <Routes>
        <Route exact path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={handleDelete} />
          </>
        } />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

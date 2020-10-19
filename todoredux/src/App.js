import React from "react";
import Footer from "../src/Components/Footer";
import VisibleTodoList from '../src/containers/VisibleTodoList'
import TodoList from "../src/Components/TodoList";
import TodoForm from "./Components/TodoForm.js";
import Contacts from "./Components/Contacts.js";


function App() {


  return (
    <div className="App">
    <h1>To Do App</h1>
    <TodoForm />
    <VisibleTodoList />
    <Footer />
      <TodoList />
      <TodoForm />
      <Contacts />
    </div>
  );
}

export default App;

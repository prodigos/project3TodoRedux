import React from "react";
import TodoList from "./Components/TodoList.js";
import TodoForm from "./Components/TodoForm.js";
import Contacts from "./Components/Contacts.js";

function App() {


  return (
    <div className="App">
    <h1>To Do App</h1>
      <TodoList />
      <TodoForm />
      <Contacts />
    </div>
  );
}

export default App;

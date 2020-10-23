import React from "react";
import Footer from "../src/Components/Footer";
import VisibleTodoList from "../src/containers/VisibleTodoList";
import TodoList from "../src/Components/TodoList";
import TodoForm from "./Components/TodoForm.js";
import Contacts from "./Components/Contacts.js";
import Nav from "./Components/NavBar";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={TodoForm}></Route>
        <Route path="/" exact component={TodoList}></Route>
        <Route path="/" exact component={Footer}></Route>
        <Route path="/" exact component={VisibleTodoList}></Route>

        <Route
          path="/contacts"
          component={Contacts}
        ></Route>
      </div>
    </Router>
  );
}

export default App;

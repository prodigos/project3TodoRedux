import React from "react";
import Footer from "../src/Components/Footer";
import VisibleTodoList from "../src/containers/VisibleTodoList";
import TodoList from "../src/Components/TodoList";
import TodoForm from "./Components/TodoForm.js";
import Contacts from "./Components/Contacts.js";
import Nav from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Nav />
          <Route path="/" exact component={TodoForm}></Route>
          <Route path="/" exact component={TodoList}></Route>
          <Route path="/" exact component={Footer}></Route>
        
          <TodoForm />
          <TodoList />
          <Footer />
          <VisibleTodoList />
          <Route path="/contacts" component={Contacts}></Route>
          {/* <Contacts /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

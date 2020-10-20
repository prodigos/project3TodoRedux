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
        <Nav />
        <h1>To Do App</h1>
        <Switch>
          <Route path="./todoform" component={TodoForm} />
          <Route path="./todoform" component={TodoList} />
          <Route path="./todoform" component={Footer} />
          <Route path="./todoform" component={VisibleTodoList}/>
          
          {/* <Route path="./contacts" component={Contacts} /> */}
          {/* <TodoList /> */}
          {/* <Footer /> */}
          <Contacts/>
        {/* <VisibleTodoList /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

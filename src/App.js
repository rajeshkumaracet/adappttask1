import React from "react";
import "./App.css";
import "bootstrap";
import Main from "./components/main_components";
import Task2 from "./components/task2_component";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/task2" component={Task2} />
        </Switch>
      </div>
    );
  }
}

export default App;

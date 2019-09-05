import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import History from "./components/History";
import { Link } from "react-router-dom";

const App = props => {
  return (
    <Router>
      <nav>
        <Link to="/history">History </Link>
        <Link to="/">ChatRoom</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={ChatRoom}></Route>
        <Route exact path="/history" component={History}></Route>
      </Switch>
    </Router>
  );
};

export default App;

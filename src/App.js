import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import History from "./components/History";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ChatRoom}></Route>
        <Route exact path="/history" component={History}></Route>
      </Switch>

      <BottomNav></BottomNav>
    </Router>
  );
};

export default App;

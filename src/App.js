import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DevelopersList from "./components/DevelopersList";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import PostPage from "./components/PostPage";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Switch>
        <Route path="/developers" component={DevelopersList} />
        <Route path="/read/:id" component={PostPage} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;

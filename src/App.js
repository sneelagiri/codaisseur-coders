import React from "react";
import "./App.css";
import DevelopersList from "./components/DevelopersList";
import Developer from "./components/Developer";

function App() {
  return (
    <div className="App">
      <DevelopersList />
      <Developer />
    </div>
  );
}

export default App;

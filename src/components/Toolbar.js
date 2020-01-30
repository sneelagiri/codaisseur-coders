// src/components/DevelopersList.js
import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
export default class Toolbar extends React.Component {
  render() {
    return (
      <div className="toolbar">
        <Link to="/" className="link1">
          Homepage
        </Link>
        <Link to="/developers" className="link2">
          List of Developers
        </Link>
        <Link to="/read/:id" className="link3">
          Posts
        </Link>
      </div>
    );
  }
}

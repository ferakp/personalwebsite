import React from "react";
import styles from "./Home.module.css";

export class Home extends React.Component {
  render() {
    return <p onClick={this.toProjects}></p>;
  }

  toProjects = () => {
    this.props.navigate("/projects");
  };
}

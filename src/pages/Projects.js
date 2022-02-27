import React from "react";
import styles from "./Home.module.css";
import { getContext } from "../states/context";

export class Projects extends React.Component {
  static contextType = getContext();

  componentDidMount() {
    this.initializeComponent();
  }

  initializeComponent() {
    this.updateLastVisitTime();
  }

  render() {
    return <p>Projects</p>;
  }

  updateLastVisitTime() {
    this.context.dispatch({ type: "PAGE_UPDATED", payload: { pageName: "code" } });
  }
}

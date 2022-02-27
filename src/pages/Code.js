import React from "react";
import { getContext } from "../states/context";
import styles from "./Code.module.css";

export class Code extends React.Component {
  static contextType = getContext();

  render() {
    return (
      <div>
        <p>Code</p>
      </div>
      );
  }

  componentDidMount() {
    this.initializeComponent();
  }

  initializeComponent() {
    this.updateLastVisitTime();
  }

  updateLastVisitTime(){
    this.context.dispatch({type: "PAGE_UPDATED", payload:{pageName: "code"}})
  }
}

import React from "react";
import { getContext } from "../states/context";
import styles from "./AboutMe.module.css";

export class AboutMe extends React.Component {
  static contextType = getContext();

  render() {
    return (
      <div>
        <p>About Me</p>
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
    this.context.dispatch({type: "PAGE_UPDATED", payload:{pageName: "aboutMe"}})
  }
}

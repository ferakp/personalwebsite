import React from "react";
import { getContext } from "../states/context";
import styles from "./VolunteeringContributions.module.css";

export class VolunteeringContributions extends React.Component {
  static contextType = getContext();

  render() {
    return (
      <div>
        <p>Volunteering Contributions</p>
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
    this.context.dispatch({type: "PAGE_UPDATED", payload:{pageName: "volunteeringContributions"}})
  }
}

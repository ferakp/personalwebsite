import React from "react";
import { getContext } from "../states/context";
import styles from "./Home.module.css";

export class Home extends React.Component {
  static contextType = getContext();

  render() {
    return <p></p>;
  }

  updateLast(){
    this.context.dispatch({type: "PAGE_UPDATED", payload:{pageName: "home"}})
  }
}

import React from "react";
import { getContext } from "../states/context";
import styles from "./BlogsResearch.module.css";

export class BlogsResearch extends React.Component {
  static contextType = getContext();

  render() {
    return (
      <div>
        <p>Blogs and Research</p>
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
    this.context.dispatch({type: "PAGE_UPDATED", payload:{pageName: "blogsResearch"}})
  }
}

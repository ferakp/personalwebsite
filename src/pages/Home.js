import React from "react";
import { getContext } from "../states/context";
import styles from "./Home.module.css";
import { NewsList } from "../components/news-list/NewsList";

export class Home extends React.Component {
  static contextType = getContext();

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <NewsList {...this.props} />
        </div>
        <div className={styles.messageContainer}>
          <p>Welcome to my homepage</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.initializeComponent();
  }

  initializeComponent() {
    this.updateLastVisitTime();
  }

  updateLastVisitTime() {
    this.context.dispatch({
      type: "PAGE_UPDATED",
      payload: { pageName: "home" },
    });
  }
}

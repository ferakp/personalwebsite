import React from "react";
import { getContext } from "../states/context";
import styles from "./Home.module.css";
import { NewsList } from "../components/news-list/NewsList";

export class Home extends React.Component {
  static contextType = getContext();

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.messageContainer}>
          <p>Welcome to my homepage</p>

          <p>
            I am Feridun Akpinar, a junior web developer, interested in almost
            everything related computer science. My website is almost like my
            world. Here you can find anything you want, from old research
            articles to current active projects I am still working on. Feel free
            to touch, break and take away anything you find from this website :)
          </p>
          <p>
            If you would like to get in touch with me, I recommend using my
            email feridun.akpinar@gmail.com.
          </p>
          <p className={`${styles.nomargin} ${styles.topmargin}`}>
            Kind Regards
          </p>
          <p className={styles.nomargin}>
            Feridun Akpinar
          </p>
        </div>
        <div className={styles.contentContainer}>
          <NewsList {...this.props} />
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

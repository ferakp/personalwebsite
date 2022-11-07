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
          <p>Welcome to my personal website</p>

          <p>
            I am a software consultant, with background from both private and public sector. I provide consultatation,
            expertise and solutions for small and medium sized business. Here on my personal website you can find from
            old research articles to the active projects I am still working on. As an alumnus of the Department of Computing, the University of
            Turku with researcher background, I am specialized on multiagent systems, knowledge graphs and data analytics. 
          </p>
          <p>If you would like to get in touch with me, please use my email feridun.akpinar@gmail.com.</p>
          <p className={`${styles.nomargin} ${styles.topmargin}`}>Kind Regards</p>
          <p className={styles.nomargin}>Feridun Akpinar</p>
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
    setTimeout(() => {
      this.updateLastVisitTime();
    }, 1000);
  }

  updateLastVisitTime() {
    this.context.dispatch({
      type: "PAGE_UPDATED",
      payload: { pageName: "home" },
    });
  }
}

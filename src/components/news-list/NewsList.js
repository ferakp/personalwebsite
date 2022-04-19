import React from "react";
import styles from "./NewsList.module.css";
import { getContext } from "../../states/context";
import { Post } from "./Post";

export class NewsList extends React.Component {
  static contextType = getContext();

  render() {
    return (
      <div className={styles.container}>
        <p>Latest Posts</p>
        {Object.entries(this.context.app.timeline.posts).map((e) => {
          return <Post key={e[0]} post={e} {...this.props}/>;
        })}
      </div>
    );
  }
}

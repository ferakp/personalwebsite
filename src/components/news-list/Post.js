import React from "react";
import styles from "./Post.module.css";
import { getContext } from "../../states/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Post extends React.Component {
  static contextType = getContext();


  changePage(href){
      this.props.navigate(href);
  }

  render() {
    let post = this.props.post[1];
    return (
      <div className={styles.container} onClick={() => this.changePage(post.href)}>
        <div className={styles.originContainer}>
          <FontAwesomeIcon
            className={styles.originIcon}
            icon={post.originIcon.split(" ")}
          />
          <p className={styles.origin} style={{ color: post.originColor }}>
            {post.origin}
          </p>
        </div>
        <p className={styles.releaseTime}>
          {post.releaseTime
            .toString()
            .slice(0, post.releaseTime.toString().indexOf("GM"))
            .toString()}
        </p>
        <div className={styles.imageContainer}>
          {post.imgUrl.length > 0 ? (
            <img className={styles.image} src={post.imgUrl} />
          ) : (
            ""
          )}
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>{post.text}</p>
        </div>
      </div>
    );
  }
}

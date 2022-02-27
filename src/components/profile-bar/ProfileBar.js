import React from "react";
import styles from "./ProfileBar.module.css";
import { getContext } from "../../states/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ProfileBar extends React.Component {
  static contextType = getContext();

  render() {
    this.profile = this.context.app.profile;

    let icons = new Map();
    icons.set("linkedin", ["fab", "linkedin"]);
    icons.set("github", ["fab", "github"]);
    icons.set("email", ["fas", "envelope"]);

    let links = new Map();
    links.set("linkedin", "https://linkedin.com/in/" + this.profile["linkedin"]);
    links.set("github", "https://github.com/" + this.profile["github"]);

    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="./profilephoto.jpg" />
        </div>
        {Object.entries(this.profile).map((e) => {
          return (
            <React.Fragment>
              <a className={styles.link} key={e[0] + "-"}>
                <span className={styles.iconContainer}>
                  <FontAwesomeIcon className={styles.itemIcon} icon={icons.get(e[0])} />
                </span>
                <span className={styles.itemText}>{e[0].charAt(0).toUpperCase() + e[0].slice(1)}</span>
              </a>
              <a className={styles.linkContent} target="_blank" href={links.get(e[0])}>
                {e[1]}
              </a>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

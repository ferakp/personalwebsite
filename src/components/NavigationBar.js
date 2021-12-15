import React from "react";
import { getContext } from "../states/context";
import styles from "./NavigationBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NavigationBar extends React.Component {
  static contextType = getContext();
  activeUrl = "";

  render() {
    // Default operations
    this.navigationBar = this.context.app.header.navigationBar;
    this.getActiveUrl();
    return (
      <div className={`${styles.container}`}>
        {
            Object.entries(this.navigationBar)
              .filter((e) => !e[1].type || e[1].type.toLowerCase() !== "icon")
              .map((element) => {
                return (
                  <div
                    className={`${styles.item} ${element[1].href === this.activeUrl ? styles.activeUrl : ""}`}
                    key={"item" + element[0]}
                  >
                    <p onClick={() => this.changePage(element[1].href || "N/A")}>{element[1].name}</p>
                  </div>
                );
              })
          
          .concat(
            Object.entries(this.navigationBar)
              .filter((e) => e[1].type && e[1].type.toLowerCase() === "icon")
              .map((element) => {
                return (
                  <div className={`${styles.iconLink}`} key={"navigationBarItem" + element[0]}>
                    <p onClick={() => this.changePage(element[1].href || "N/A")}>
                      <FontAwesomeIcon icon={element[1].faIconName.split(" ") || ["fas", "question"]} />
                    </p>
                  </div>
                );
              })
          )}
      </div>
    );
  }

  changePage = (href) => {
    if (!href.includes("@") && href !== "N/A" && !href.includes("http")) this.props.navigate(href);
    else if (href.includes("http")) {
        window.open(href, "_blank");
    } else if(href.includes("@")) {
        navigator.clipboard.writeText(href);
    }
  };

  getActiveUrl = () => {
    if (this.props.location) this.activeUrl = this.props.location.pathname;
  };
}

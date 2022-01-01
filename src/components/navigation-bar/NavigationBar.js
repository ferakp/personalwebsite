import React from "react";
import { getContext } from "../../states/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavigationBar.module.css";

export class NavigationBar extends React.Component {
  static contextType = getContext();
  activeUrl = "";
  state = { mobileMode: false };

  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  barClicked = () => {
    this.setState({ mobileMode: !this.state.mobileMode });
  };

  changePage = (href) => {
    if (this.state.mobileMode) this.barClicked();
    if (!href.includes("@") && href !== "N/A" && !href.includes("http")) this.props.navigate(href);
    else if (href.includes("http")) {
      window.open(href, "_blank");
    } else if (href.includes("@")) {
      navigator.clipboard.writeText(href);
    }
  };

  getActiveUrl = () => {
    if (this.props.location) this.activeUrl = this.props.location.pathname;
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      if (this.state.mobileMode) this.setState({ mobileMode: false });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    // Default operations
    this.navigationBar = this.context.app.header.navigationBar;
    this.getActiveUrl();
    return (
      <React.Fragment>
        <div className={`${styles.container} ${this.state.mobileMode ? styles.mobileMode : ""}`} ref={this.wrapperRef}>
          {[
            <div className={styles.mobileMenuHeader} key={"mobileMenuHeader"}>
              {Object.entries(this.navigationBar)
                .filter((e) => !e[1].type || e[1].type.toLowerCase() !== "icon")
                .map((element, index) => {
                  if (element[1].href === "/")
                    return (
                      <div
                        className={`${styles.item} ${element[1].href === this.activeUrl ? styles.activeUrl : ""}`}
                        key={"itemHeader" + element[0] + index}
                      >
                        <p onClick={() => this.changePage(element[1].href || "N/A")}>{element[1].name}</p>
                      </div>
                    );
                  else return undefined;
                })}
              <div className={`${styles.iconLink} ${styles.barIcon}`} key={"navigationBarItem bars"}>
                <p onClick={() => this.barClicked()}>
                  <FontAwesomeIcon icon={["fa", "bars"]} />
                </p>
              </div>
            </div>,
          ]
            .concat(
              Object.entries(this.navigationBar)
                .filter((e) => !e[1].type || e[1].type.toLowerCase() !== "icon")
                .map((element, index) => {
                  return (
                    <div
                      className={`${styles.item} ${element[1].href === this.activeUrl ? styles.activeUrl : ""}`}
                      key={"item" + element[0]}
                    >
                      <p onClick={() => this.changePage(element[1].href || "N/A")}>
                        {index === 0 && this.state.mobileMode ? "Homepage" : element[1].name}
                      </p>
                    </div>
                  );
                })
            )

            .concat([
              <div className={styles.iconContainer} key="iconContainer">
                {Object.entries(this.navigationBar)
                  .filter((e) => e[1].type && e[1].type.toLowerCase() === "icon")
                  .map((element) => {
                    return (
                      <div className={`${styles.iconLink}`} key={"navigationBarItem" + element[0]}>
                        <p onClick={() => this.changePage(element[1].href || "N/A")}>
                          <FontAwesomeIcon icon={element[1].faIconName.split(" ") || ["fas", "question"]} />
                        </p>
                      </div>
                    );
                  })}{" "}
              </div>,
            ])}
        </div>
      </React.Fragment>
    );
  }
}

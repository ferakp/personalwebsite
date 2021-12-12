import React from "react";
import { getContext } from "../states/context";

export class Header extends React.Component {
  static contextType = getContext();

  // Context shortcuts
  header;
  navigationBar;

  render() {
    this.header = this.context.appState.app.header;
    this.navigationBar = this.header.navigationBar;

    return(
      <React.Fragment>
        <p>Header</p>
      </React.Fragment>
    )
  }

  change = () => {

  };
}


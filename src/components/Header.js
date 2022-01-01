import React from "react";
import { getContext } from "../states/context";
import { NavigationBar } from "./navigation-bar/NavigationBar";

export class Header extends React.Component {
  static contextType = getContext();

  render() {
    this.header = this.context.app.header;

    return(
      <React.Fragment>
        <NavigationBar {...this.props}/>
      </React.Fragment>
    )
  }
}


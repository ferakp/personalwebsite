import React from "react";
import { getContext } from "../states/context";

export class Menu extends React.Component {
  static contextType = getContext();

  render() {
    return <p onClick={this.change}>{this.context.appState.app.homepageView.menu.navigationItems.homepage.navigationMenuName || "N/A"}</p>;
  }

  change = () => {
    this.context.appState.app.homepageView.menu.navigationItems.homepage.navigationMenuName = "Etusivu1";
    console.log(this.context);
      //this.context.change();
      //console.log(this.context);
  };
}

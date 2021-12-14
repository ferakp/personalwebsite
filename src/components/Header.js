import React from "react";
import { getContext } from "../states/context";

export class Header extends React.Component {
  static contextType = getContext();

  render() {
    this.header = this.context.app.header;

    return(
      <React.Fragment>
        {Object.entries(this.header.navigationBar).map(e => (<p key={e[0]}>{e[1]["name"]}</p>))}
      </React.Fragment>
    )
  }
}


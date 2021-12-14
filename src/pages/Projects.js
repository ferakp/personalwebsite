import React from "react";
import styles from "./Home.module.css";
import { getContext } from "../states/context";

export class Projects extends React.Component {
  static contextType = getContext();

  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    this.initializeComponent();
  }

  initializeComponent() {
    this.setState({ page: this.context.app.pages.home });
  }

  render() {
    return <p></p>;
  }
}

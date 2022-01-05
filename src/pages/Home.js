import React from "react";
import { getContext } from "../states/context";
import styles from "./Home.module.css";
import {ProfileBar} from '../components/profile-bar/ProfileBar'

export class Home extends React.Component {
  static contextType = getContext();

  render() {
    return (
      <div>
        <ProfileBar {...this.props}/>
      </div>
      );
  }

  updateLast(){
    this.context.dispatch({type: "PAGE_UPDATED", payload:{pageName: "home"}})
  }
}

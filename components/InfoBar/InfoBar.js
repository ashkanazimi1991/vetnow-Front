import React from "react";
import classes from "./InfoBar.module.css";
import Link from "next/link";

const InfoBar = ({ room }) => (
  <div className={classes.infoBar}>
    <div className={classes.leftInnerContainer}>
      <h3>{room}</h3>
    </div>
    <div className={classes.rightInnerContainer}>
      <Link href="/">خروج</Link>
    </div>
  </div>
);

export default InfoBar;

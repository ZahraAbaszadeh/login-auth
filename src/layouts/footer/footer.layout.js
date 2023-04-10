import { Navigation } from "components";
import React from "react";
import Styles from "./footer.module.css";
import Logo from "assets/images/logos/logo.png";

export const Footer = (props) => {
  return (
    <footer>
      <div className={Styles.footerContent}>
        <h4>All Rights Reserved</h4>
      </div>
    </footer>
  );
};

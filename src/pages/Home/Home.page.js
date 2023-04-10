import { Footer, Header } from "layouts";
import React from "react";
import Styles from "./Home.page.module.css";


export const HomePage = (props) => {

  return (
    <div className="contentWithHeaderAndFooter">
      <Header />

      <div className={Styles.homeContainer}>
        <h1>React, Redux, React-Router-Dom, Axios, JWT</h1>
      </div>

      <Footer />
    </div>
  );
};

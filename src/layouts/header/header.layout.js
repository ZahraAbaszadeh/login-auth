import Logo from "assets/images/logos/logo.png";
import React from "react";
import Styles from "./header.module.css";
import { UserOutlined } from "@ant-design/icons";
import { Navigation } from "components";

export const Header = (props) => {

  return (
    <header className={Styles.header}>
      <div className={Styles.topHeader}>
        <div className={Styles.logoBox}>
          <Navigation link="/" text={<img src={Logo} alt="logo" />}  />
        </div>

        <div className={Styles.userBox}>
          <ul>
            <li className={Styles.userIconBox}>
              <Navigation link="/login" text={<UserOutlined />}  />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

import { Navigation } from "components";
import React from "react";
import Styles from './dashboardLayout.module.css';

export const DashboardLayout = (props) => {

  
  return (
    <div className={Styles.DashboardLayout}>
      <div className={Styles.row}>
        <div className={Styles.sideBar}>
          <Navigation link="/dashboard/profile" text="پروفایل"  />

          <Navigation link="/dashboard/logout" text="خروج"  />
        </div>
        <div className={Styles.mainContent}>{props.children}</div>
      </div>
    </div>
  );
}
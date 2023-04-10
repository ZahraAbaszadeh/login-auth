import { DashboardLayout, Footer, Header } from "layouts";
import React from "react";
import Styles from "./Profile.page.module.css";

export const UserProfilePage = (props) => {
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  console.log(userInfo);
  return (
    <div className="contentWithHeaderAndFooter">
      <Header />
      <DashboardLayout>
        <div className={Styles.profileDetails}>
          <h1>خوش آمدید</h1>
          <h3>پروفایل کاربری شما</h3>
          <h2>username : {userInfo.username}</h2>
          <h3>نام : {userInfo.firstName}</h3>
          <h3>نام خانوادگی : {userInfo.lastName}</h3>
        </div>
      </DashboardLayout>

      <Footer />
    </div>
  );
};

import {
  ACCESS_TOKEN,
  IS_LOGGED_IN,
  REFRESH_TOKEN,
} from "configs/variables.config";
import Navigate from "universal-navigate";

export const getUserloggedInData = () => {
  if (localStorage.hasOwnProperty("userData")) {
    return JSON.parse(localStorage.getItem("userData"));
  } else {
    return null;
  }
};

export const parseJwt = (token) => {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
};

export const CheckUserExpired = (pageStatus) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (!token) return;
  const { exp } = parseJwt(token);
  if (exp * 1000 < Date.now()) {
    localStorage.removeItem("userData");
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(IS_LOGGED_IN);

    if (pageStatus != "public") {
      Navigate.push({
        url: "/login?expired=true",
        animated: true,
      });
    }
  }
};

export function removeAllUserData() {
  localStorage.removeItem("userData");
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(IS_LOGGED_IN);
}

export const loadUserData = () => {
  try {
    const userData = JSON.parse(localStorage.getItem("userData"));

    const userInfo = {
      id: userData.id,
      role: userData.role,
      username: userData.username,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
      createdAt: userData.createdAt,
      exp: userData.exp,
      loggedIn: userData.loggedIn,
      token: userData.token,
    };

    if (userData === null) {
      return (userInfo = {
        id: null,
        role: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        createdAt: null,
        exp: null,
        loggedIn: false,
        token: "",
      });
    }
    return userInfo;
  } catch (err) {
    return undefined;
  }
};

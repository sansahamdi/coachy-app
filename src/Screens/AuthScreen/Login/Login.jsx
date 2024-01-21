import React from "react";
import "../auth.css";

import useServiceLogin from "./useServiceLogin";
function Login({ setIsLoggedIn, setTypeUser, setHideTabBar }) {
  const { setusername, t, setPassword, login, navigate } = useServiceLogin(
    setIsLoggedIn,
    setTypeUser,
    setHideTabBar
  );
  return (
    <div className="container-auth">
      <div className="container-page-auth">
        <img className="logo-img" src={require("../18.png")} />
        <div className="form-login">
          <input
            type="text"
            className="input"
            placeholder={t("phoneNumber")}
            onChange={(event) => {
              setusername(event.target.value);
            }}
          />
          <input
            type="password"
            className="input"
            placeholder={t("password")}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button
          className="btn-auth"
          onClick={() => {
            login();
          }}
        >
          {t("login")}
        </button>
        <p
          onClick={() => {
            navigate("/SignUp");
          }}
          className="txt-auth"
        >
          {t("createAcc")}
        </p>
      </div>
    </div>
  );
}

export default Login;

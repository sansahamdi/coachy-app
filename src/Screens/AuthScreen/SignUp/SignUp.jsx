import React from "react";
import "../auth.css";
import useServiceSignup from "./useServiceSignup";
function SignUp() {
  const {
    setFirstName,
    setLastName,
    setAge,
    setPhoneNumber,
    setCout,
    setExperience,
    setDomaine,
    setPassword,
    checkboxCoach,
    handleCheckBoxCoach,
    checkboxClient,
    handleCheckBoxClient,
    signUpAsCoach,
    typeUser,
    signUpAsClient,
    navigate,
    t
  }=useServiceSignup()
  
  return (
    <div className="container-auth">
      <div className="container-page-auth">
        <img className="logo-img" src={require("../18.png")} />
        <div className="form-signUp">
          <input
            type="text"
            className="input-firstName"
            placeholder={t("firstName")}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <input
            type="text"
            className="input"
            placeholder={t("lastName")}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <input
            type="text"
            className="input"
            placeholder={t("age")}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <input
            type="text"
            className="input"
            placeholder={t("phoneNumber")}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
          {typeUser === "Coach" && (<><div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
            {/* <input
            type="text"
            className="input"
            placeholder="$ heure"
            onChange={(event) => {
              setCout(event.target.value);
            }}
            style={{width:"30%"}}
          /> */}
            <select
                        style={{width:"50%"}}
              className="input"
              onChange={(event) => {
                setCout(event.target.value);
              }}
            >
              <option value="">Tarification</option>
              <option value="30">30 CHF</option>
              <option value="40">40 CHF</option>
              <option value="50">50 CHF</option>  
              <option value="60">60 CHF</option>  
            </select>
            <input
            type="text"
            className="input"
            placeholder="expérience"
            onChange={(event) => {
              setExperience(event.target.value);
            }}
            style={{width:"30%",marginLeft:3}}

          />
          </div>
          
          
            <select
              className="input"
              onChange={(event) => {
                setDomaine(event.target.value);
              }}
            >
              <option value="fitness">fitness</option>
              <option value="Diet">Diet</option>
              <option value="Mental">Mental</option>
            </select></>
          )}
          <input
            type="password"
            className="input"
            placeholder={t("password")}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div className="check-type-user">
            <input
              type="checkbox"
              checked={checkboxCoach}
              onChange={handleCheckBoxCoach}
            />
            <label>{t("signUpAsCoach")}</label>
          </div>
          <div className="check-type-user">
            <input
              type="checkbox"
              checked={checkboxClient}
              onChange={handleCheckBoxClient}
            />
            <label>{t("signupAsClient")}</label>
          </div>
        </div>
        <button
          className="btn-auth"
          onClick={() => {
            typeUser === "Coach"
              ? signUpAsCoach()
              : typeUser === "Client"
              ? signUpAsClient()
              : alert("pick you type");
          }}
        >
          {t("createAcc")}
        </button>
        <p style={{ color: "#47474e" }}>
          {t("alreadyHaveAcc")}
          <a
            className="txt-auth"
            onClick={() => {
              navigate("/Login");
            }}
          >
            {t("sign")}
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

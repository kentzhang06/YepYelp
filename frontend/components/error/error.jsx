import React from "react";
import SignupLoginBanner from "../session_form/signup_login_banner";

const ErrorPage = (props) => {
  return (
    <div>
      <SignupLoginBanner />
      <div className="error-page">
        <h1>404 Page Not Found</h1>
        <img src={window.errorHeadbandUrl} alt="errorHeadband" />
      </div>
    </div>
  )
}

export default ErrorPage;
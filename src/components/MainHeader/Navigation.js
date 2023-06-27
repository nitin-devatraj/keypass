import React from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../context/auth-context";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(authCtx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {authCtx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {authCtx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {authCtx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;

import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, users, ...rest }) => {
  return (
    <Route
      {...rest}
      children={(props) => {
        return <Component {...rest} {...props} />;

        // return (
        //   <Redirect
        //     to={{
        //       pathname: path,
        //       state: {
        //         from: props.location,
        //       },
        //     }}
        //   />
        // );
      }}
    />
  );
};

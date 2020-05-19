import React, { Fragment } from "react";
import spinner from "./img/loader.gif";

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="loading..."
    />
  </Fragment>
);

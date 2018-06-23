import React from "react";
import { Link } from "react-router-dom";

const LinkButton = props => (
  <Link className={`${props.color}`} to={`${props.url}`}>
    {props.children}
  </Link>
);

export default LinkButton;

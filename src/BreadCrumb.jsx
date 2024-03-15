import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  // console.log(location);

  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  let currentLink = "";

  let crumbElements = crumbs.map((crumb, index) => {
    currentLink += `/${crumb}`;
    return (
      <span key={index}>
        <Link to={currentLink} className="crumb-link">
          {crumb}
        </Link>
        <span>&gt;</span>
      </span>
    );
  });

  // console.log({ crumbs });

  return <div>{crumbElements}</div>;
};

export default BreadCrumb;

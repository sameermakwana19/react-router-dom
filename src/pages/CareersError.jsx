import React from "react";
import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError();
  return (
    <>
      <div>Error</div>
      <h2>{error.message}</h2>
      <h4>
        back to <Link to="/">home page</Link>
      </h4>
    </>
  );
};

export default CareersError;

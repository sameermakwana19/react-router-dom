import React from "react";
import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <>
      <h3>Join Our Wonderful Team</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        impedit mollitia. Dicta incidunt nobis distinctio vero, earum culpa
        reprehenderit obcaecati.
      </p>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default CareersLayout;

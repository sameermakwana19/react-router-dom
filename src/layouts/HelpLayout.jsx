import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <header>
        <h3>Welcome to Help Section</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          omnis!
        </p>
        <NavLink to="faq">FAQs </NavLink>
        <NavLink to="contact">Contact </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HelpLayout;

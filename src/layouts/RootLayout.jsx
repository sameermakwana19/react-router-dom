import React, { createContext, useCallback, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";

export const UserContext = createContext();

const RootLayout = () => {
  const [user, setUser] = useState("sameer");

  const logoutHandler = useCallback(() => {
    setUser(null);
  }, []);

  let value = useMemo(() => {
    return { user, logoutHandler };
  }, [user]);
  return (
    <>
      <UserContext.Provider value={value}>
        <header>
          <nav>
            <Link>
              <h2>ROUTER</h2>
            </Link>

            <div className="main-nav">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="help">Help</NavLink>
              <NavLink to="careers">Careers</NavLink>
            </div>
          </nav>
        </header>
        <BreadCrumb />
        <main>
          <Outlet />
        </main>
      </UserContext.Provider>
    </>
  );
};

export default RootLayout;

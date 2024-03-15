import React, { useContext, useState } from "react";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import { UserContext } from "../layouts/RootLayout";

const Careers = () => {
  const teamMembers = useLoaderData();

  const { user, logoutHandler } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/about" replace={true} />;
  }

  return (
    <div
      style={{
        margin: "1rem 0",
      }}
    >
      <h2>Our Team</h2>
      {teamMembers.map(({ id, name }) => (
        <div key={id}>
          <Link to={`${id}`}>
            {" "}
            {/* url -> /careers/9 */}
            <h4>
              {id}-{name}
            </h4>
          </Link>
        </div>
      ))}

      <button onClick={() => logoutHandler()}>Logout</button>
    </div>
  );
};

export default Careers;

export const careersLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw Error("404 - No data Found");
  }

  // const data = await res.json();
  // return data;

  return res.json();
};

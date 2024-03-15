import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const user = useLoaderData();
  // console.log(user);

  // alternate way to obtain the id from the url
  // const { id } = useParams();

  return (
    <>
      <h2 style={{ margin: "1rem" }}>User</h2>
      <h3>Name : {user.name}</h3>
      <h3>Email : {user.email}</h3>
      <h3>Phone : {user.phone}</h3>
    </>
  );
};

// export const careerDetails = async (params) => {
//   console.log(params);
// {request ,params, context}

export const careerDetails = async ({ params }) => {
  const { id } = params;
  // console.log({ params });

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw Error("404 - No User Found");
  }

  return res.json();
};

export default CareerDetails;

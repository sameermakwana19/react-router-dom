import React from "react";
import { Form, redirect, useActionData, useLocation } from "react-router-dom";

const Contact = () => {
  const { pathname } = useLocation();
  // console.log({ pathname });

  const data = useActionData();
  console.log({ data });
  return (
    <>
      <div>Contact</div>
      {data?.error}
      <Form className="contact-form" method="POST" action={pathname}>
        <div className="input-grp">
          <label htmlFor="email">EMAIL:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="input-grp">
          <label htmlFor="message">MESSAGE:</label>
          <textarea name="message" id="message" />
        </div>
        <button>Submit</button>
      </Form>
    </>
  );
};

export default Contact;

export const contactFormAction = async ({ request }) => {
  // console.log(request);
  const data = await request.formData();
  // console.log({ data });
  console.log({ email: data.get("email") });
  console.log({ message: data.get("message") });

  const value = {
    email: data.get("email"),
    message: data.get("message"),
  };

  if (value.message.trim().length <= 10) {
    return {
      error: "Message must contain atleast 11 chars",
    };
  }
  return redirect("/help");
};

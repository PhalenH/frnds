import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../utils/mutations";

export default function Login() {
  const [formState, setFormState] = useState({
    name: "",
    password: "",
  });
  // const [login, { error, data }] = useMutation();

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);
  //   try {
  //     const { data } = await login({
  //       variables: { ...formState },
  //     });

  //   //   Auth.login(data.login.token);
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   // clear form values
  //   setFormState({
  //     name: "",
  //     password: "",
  //   });
  // };
  return <div>Login</div>;
}

import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useMutation } from "@apollo/client";

export default function Login() {
  const [formState, setFormState] = useState({
    name: "",
    password: "",
  });
  const [addProfile, { error, data }] = useMutation();

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      //   Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };
  return <div>Signup</div>;
}

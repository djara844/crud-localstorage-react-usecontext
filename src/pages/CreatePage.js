import React, { useContext, useState } from "react";

import { UserContext } from "../components/UserContext";

const CreatePage = () => {
  const { user, setUser } = useContext(UserContext);

  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const { name, phone, email } = formValues;

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      id: new Date().getTime(),
      [target.name]: target.value,
    });
  };

  const handleSubbmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      return;
    }
    setUser([...user, formValues]);
    reset();
  };

  const reset = () => {
    setFormValues({
      id: "",
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <h1>Create User </h1>
      <hr />
      <form onSubmit={handleSubbmit}>
        <input
          type="text"
          placeholder="Nombre"
          className="form-control mt-3"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Correo electrónico"
          className="form-control mt-3"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Celular"
          className="form-control mt-3"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary mt-3">
          Add user
        </button>
      </form>
    </>
  );
};

export default CreatePage;

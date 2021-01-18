import React, { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";

const UpdatePage = () => {
  const { user, setUser } = useContext(UserContext);

  const [edit, setEdit] = useState(false);

  const handleUpdate = (userId) => {
    const { name, email, phone } = formValues;
    setUser(
      user.map((item) => {
        return item.id === userId
          ? {
              id: userId,
              name: name === "" ? item.name : name,
              email: email === "" ? item.email : email,
              phone: phone === "" ? item.phone : phone,
            }
          : item;
      })
    );
    setEdit(!edit);
  };

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h1>Update User</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo electrónico</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {edit ? (
                  <input
                    defaultValue={user.name}
                    onChange={handleChange}
                    name="name"
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {edit ? (
                  <input
                    defaultValue={user.email}
                    onChange={handleChange}
                    name="email"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {edit ? (
                  <input
                    defaultValue={user.phone}
                    onChange={handleChange}
                    name="phone"
                  />
                ) : (
                  user.phone
                )}
              </td>
              <td>
                <button
                  className={edit ? "btn btn-success" : "btn btn-warning"}
                  onClick={
                    edit ? () => handleUpdate(user.id) : () => handleEdit()
                  }
                >
                  {edit ? "Update" : "Edit"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdatePage;

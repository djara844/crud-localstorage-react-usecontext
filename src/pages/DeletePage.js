import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";

const DeletePage = () => {
  const { user, setUser } = useContext(UserContext);

  const handleDelete = (userId) => {
    setUser(user.filter((user) => user.id !== userId));
  };

  return (
    <>
      <h1>Delete User</h1>
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
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DeletePage;

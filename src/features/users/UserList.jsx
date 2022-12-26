import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <div className="container">
      <div className="row-name">
        <h1>list of student</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button
            onClick={() => dispatch(fetchUsers())}
            className="button-primary"
          >
            Load users
          </button>
        </div>
        <div className="two columns">
          <Link to="/add-user">
            <button style={{ backgroundColor: "white" }}>Add student</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr style={{background:"#aff7af"}}>
                <th>ROLLNO</th>
                <th>Name</th>
                <th>Email</th>
                <th>ADDRESS</th>
                <th>CONTACT NUMBER</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ id, name, email,address,contact }, i) => (
                  <tr key={i} style={{background:"#b3eeff"}}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>

                    <td>{address}</td>
                    <td>{contact}</td>

                    <td>
                      <button style={{background:"#c5bde7"}} onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-user/${id}`}>
                        <button style={{background:"#c5bde7"}}>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

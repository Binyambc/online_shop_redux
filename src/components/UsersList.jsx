import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/productSlice";


function UsersList() {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);
   

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
          <h2>Users</h2>
    
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p style={{ color: "red" }}>{error}</p>}
    
          {status === "succeeded" && users.length > 0 ? (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <strong>{user.name}</strong> - {user.email}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
    );
}

export default UsersList;
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userState1 } from "../recoil/userAtom";
import useUsers from "../hooks/useUser";

export default function UserList() {
  const { fetchUsers } = useUsers();
  const { data, loading, error } = useRecoilValue(userState1);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Danh sách user</h2>
      {data.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

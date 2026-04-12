import { useSetRecoilState } from "recoil";
import { userState1 } from "../recoil/userAtom";

export default function useUsers() {
  const setUser = useSetRecoilState(userState1);

  const fetchUsers = async () => {
    setUser({
      data: [],
      loading: true,
      error: null,
    });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUser({
        data,
        loading: false,
        error: null,
      });
    } catch (err) {
      setUser({
        data: [],
        loading: false,
        error: "Fetch failed!",
      });
    }
  };

  return { fetchUsers };
}

import { useEffect, useState } from "react";

function MyComp3() {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        if (!res.ok) {
          throw new Error(`User not found ${res.status}`);
        }
        const result = await res.json();
        // console.log(data);
        setData(Array.isArray(result) ? result : [result]);
      } catch (error) {
        // console.error("Loi fetch");
        setError(error.message);
        setData([]);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      }
    }
    fetchData();
  }, [userId]);

  return (
    <>
      <input
        type="text"
        value={userId}
        placeholder="Nhập userID..."
        onChange={(e) => setUserId(e.target.value)}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        data.map((x) => (
          <ul key={x.id}>
            <li>
              Name: {x.name} - Phone: {x.phone} - Website: {x.website}
            </li>
          </ul>
        ))
      )}
    </>
  );
}

export default MyComp3;

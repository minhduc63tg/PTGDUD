import { useEffect, useState } from "react";

function MyComp2() {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Error 404");
        }
        const result = await res.json();
        // console.log(data);
        setData(Array.isArray(result) ? result : [result]);
      } catch (error) {
        // console.error("Loi fetch");
        setError(error.message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error === null ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} - {item.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
}

export default MyComp2;

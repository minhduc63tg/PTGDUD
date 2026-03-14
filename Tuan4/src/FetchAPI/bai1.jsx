import { useEffect, useState } from "react";

function MyComp1() {
  let [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      // console.log(data);
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <>
      {data.map((x) => (
        <ul key={x.id}>
          <li>
            {x.name} - {x.email}
          </li>
        </ul>
      ))}
    </>
  );
}

export default MyComp1;

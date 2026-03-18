import React, { useEffect, useState } from "react";

function FetchPost() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchPostLocal(params) {
      try {
        const res = await fetch("./post.json");
        if (!res.ok) {
          throw new Error(`${res.status}`);
        }
        const posts = await res.json();

        setData(posts);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchPostLocal();
  }, []);

  const filterPosts = data.filter((x) => x.title.includes(searchValue));

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleSearch} />

      {filterPosts.map((i) => (
        <ul key={i.id}>
          <li>{i.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default FetchPost;

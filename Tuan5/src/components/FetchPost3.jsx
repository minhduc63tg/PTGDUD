import React, { useEffect, useState } from "react";

function FetchPost3() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchPostLocal() {
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
  }, [searchValue]);

  const filterPosts = data.filter((x) => x.title.includes(searchValue));

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div>
      <input
        className="bg-green-400 p-5 text-2xl"
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search key...."
      />

      <select name="" id=""></select>

      {filterPosts.map((i) => (
        <ul key={i.id}>
          <li className="p-5 text-blue-400">{i.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default FetchPost3;

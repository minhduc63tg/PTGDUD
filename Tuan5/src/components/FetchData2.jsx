import React, { useEffect, useState } from "react";

function FetchPost2() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCate, setSelectedCate] = useState("");

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
  }, []);

  const filterPosts = data.filter((x) => x.title.includes(searchValue));

  const filterUserId = data.filter((item) => {
    return item.userId === Number(selectedCate);
  });

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  function handleSelected(e1) {
    setSelectedCate(e1.target.value);
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

      <select value={selectedCate} onChange={handleSelected}>
        <option value="1">User1</option>
        <option value="2">User2</option>
        <option value="3">User3</option>
      </select>

      {filterUserId.map((i) => (
        <ul key={i.id}>
          <li className="p-5 text-blue-400">{i.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default FetchPost2;

// const filtered = data
//   .filter((item) => item.title.includes(searchValue))
//   .filter((item) => selectedCate ? item.userId === Number(selectedCate) : true);

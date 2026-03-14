import React, { useEffect, useState } from "react";

function MyComp4() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error(`${res.status}`);
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("not found", error);
      }
    }

    fetchPost();
  }, []);

  const filterPost = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filterPost.map((post) => (
        <ul key={post.id}>
          <li>{post.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default MyComp4;

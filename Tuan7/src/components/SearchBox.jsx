import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchState } from "../atoms/searchAtom";
import useSearch from "../hooks/useSearch";

export default function SearchBox() {
  const [input, setInput] = useState("");
  const { search } = useSearch();
  const { results, loading, error } = useRecoilValue(searchState);

  useEffect(() => {
    const timer = setTimeout(() => {
      search(input);
    }, 500); // debounce 500ms

    return () => clearTimeout(timer); // clear nếu user gõ tiếp
  }, [input]);

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tìm user..."
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {results.map((u) => (
        <div key={u.id}>
          <p>{u.name}</p>
        </div>
      ))}
    </div>
  );
}

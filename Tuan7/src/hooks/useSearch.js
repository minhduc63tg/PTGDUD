import { useSetRecoilState } from "recoil";
import { searchState } from "../atoms/searchAtom";

export default function useSearch() {
  const setSearch = useSetRecoilState(searchState);

  const search = async (query) => {
    if (!query.trim()) return;

    setSearch({
      query,
      results: [],
      loading: true,
      error: null,
    });

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?q=${query}`,
      );
      const data = await res.json();

      setSearch({
        query,
        results: data,
        loading: false,
        error: null,
      });
    } catch (err) {
      setSearch({
        query,
        results: [],
        loading: false,
        error: "Search failed",
      });
    }
  };

  return { search };
}

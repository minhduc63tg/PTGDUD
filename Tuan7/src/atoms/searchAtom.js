import { atom } from "recoil";

export const searchState = atom({
  key: "searchState",
  default: {
    query: "",
    results: [],
    loading: false,
    error: null,
  },
});

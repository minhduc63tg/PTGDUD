import { atom } from "recoil";

export const userState1 = atom({
  key: "userState1",
  default: {
    data: [],
    loading: false,
    error: null,
  },
});

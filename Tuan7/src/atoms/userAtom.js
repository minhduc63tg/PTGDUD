import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: null,
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedUser = localStorage.getItem("user");

      if (savedUser) {
        setSelf(JSON.parse(savedUser));
      }

      onSet((newUser) => {
        if (newUser) {
          localStorage.setItem("user", JSON.stringify(newUser));
        } else {
          localStorage.removeItem("user");
        }
      });
    },
  ],
});

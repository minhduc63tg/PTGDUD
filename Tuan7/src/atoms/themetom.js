import { atom } from "recoil";

export const themeState = atom({
  key: "themeState",
  default: "light",
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme) {
        setSelf(savedTheme);
      }

      onSet((newTheme) => {
        localStorage.setItem("theme", newTheme);
      });
    },
  ],
});

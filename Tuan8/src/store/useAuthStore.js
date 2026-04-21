// src/store/useAuthStore.js
import { create } from "zustand";

const USERS_KEY = "chefify_users";
const SESSION_KEY = "chefify_session";

const loadUsers = () => {
  const rawUsers = localStorage.getItem(USERS_KEY);
  if (!rawUsers) return [];
  try {
    return JSON.parse(rawUsers);
  } catch {
    return [];
  }
};

const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const loadSession = () => {
  const rawSession = localStorage.getItem(SESSION_KEY);
  if (!rawSession) return null;
  try {
    return JSON.parse(rawSession);
  } catch {
    return null;
  }
};

const initialSession = loadSession();
const persistSession = (session) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const useAuthStore = create((set) => ({
  isAuthenticated: Boolean(initialSession?.user),
  user: initialSession?.user ?? null,
  isSubscribed: Boolean(initialSession?.isSubscribed),
  authError: "",

  login: (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();
    const users = loadUsers();
    const matchedUser = users.find(
      (user) =>
        user.email.toLowerCase() === normalizedEmail && user.password === password,
    );

    if (matchedUser) {
      const sessionUser = {
        email: matchedUser.email,
        name: matchedUser.name,
        avatar: matchedUser.avatar,
      };
      persistSession({
        user: sessionUser,
        isSubscribed: Boolean(matchedUser.isSubscribed),
      });
      set({
        isAuthenticated: true,
        user: sessionUser,
        isSubscribed: Boolean(matchedUser.isSubscribed),
        authError: "",
      });
      return true;
    }
    set({ authError: "Email hoặc mật khẩu không đúng." });
    return false;
  },

  register: (firstName, lastName, email, password) => {
    const normalizedEmail = email.trim().toLowerCase();
    const users = loadUsers();

    if (!normalizedEmail || !password || !firstName.trim()) {
      set({ authError: "Vui long nhap day du thong tin bat buoc." });
      return false;
    }

    const existedUser = users.some(
      (user) => user.email.toLowerCase() === normalizedEmail,
    );
    if (existedUser) {
      set({ authError: "Email da duoc dang ky." });
      return false;
    }

    const newUser = {
      email: normalizedEmail,
      password,
      name: `${firstName.trim()} ${lastName.trim()}`.trim(),
      avatar: "https://i.pravatar.cc/150?img=11",
      isSubscribed: false,
    };
    const nextUsers = [...users, newUser];
    saveUsers(nextUsers);

    const sessionUser = {
      email: newUser.email,
      name: newUser.name,
      avatar: newUser.avatar,
    };
    persistSession({ user: sessionUser, isSubscribed: false });

    set({
      isAuthenticated: true,
      user: sessionUser,
      isSubscribed: false,
      authError: "",
    });
    return true;
  },

  subscribePlan: () => {
    const currentSession = loadSession();
    const currentUser = currentSession?.user;
    if (!currentUser?.email) {
      return;
    }
    const users = loadUsers();
    const nextUsers = users.map((user) =>
      user.email.toLowerCase() === currentUser.email.toLowerCase()
        ? { ...user, isSubscribed: true }
        : user,
    );
    saveUsers(nextUsers);
    persistSession({ ...currentSession, isSubscribed: true });
    set({ isSubscribed: true });
  },

  clearAuthError: () => set({ authError: "" }),
  logout: () => {
    localStorage.removeItem(SESSION_KEY);
    set({
      isAuthenticated: false,
      user: null,
      isSubscribed: false,
      authError: "",
    });
  },
}));

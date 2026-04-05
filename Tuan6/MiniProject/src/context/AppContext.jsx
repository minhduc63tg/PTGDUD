import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const login = () => setUser({ name: "User 1" });
  const logout = () => setUser(null);
  const addToCart = (product) => setCart([...cart, product]);

  return (
    <AppContext.Provider value={{ user, login, logout, cart, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

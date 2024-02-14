import React, { createContext, useContext, useState } from "react";
import { Bejelentkezes } from "./bejelentkezes.js";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
function App() {
    return (
      <AuthProvider>
        <Bejelentkezes />
      </AuthProvider>
    );
  }
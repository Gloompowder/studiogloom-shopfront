// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getToken, loginApi, logoutApi, getUserApi } from '../lib/auth'; 
// Your API helpers: call /api/login, /api/logout, /api/me

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount, check for existing session
  useEffect(() => {
    getToken().then(token => {
      if (token) {
        getUserApi(token).then(setUser);
      }
      setLoading(false);
    });
  }, []);

  const login = async (credentials) => {
    const token = await loginApi(credentials);
    const user  = await getUserApi(token);
    setUser(user);
    return user;
  };

  const logout = async () => {
    await logoutApi();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

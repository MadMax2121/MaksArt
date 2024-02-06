import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../Firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fromLocation, setFromLocation] = useState('/');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log("User from onAuthStateChanged", user); 
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, fromLocation, setFromLocation }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

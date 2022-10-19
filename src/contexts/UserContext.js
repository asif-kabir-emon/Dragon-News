import React, { createContext } from "react";
import {} from "react-router-dom";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const user = { name: "Emon" };
  const authInfo = { user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;

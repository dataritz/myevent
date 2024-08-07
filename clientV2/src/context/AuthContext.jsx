import { createContext, useContext, useState } from "react";

export const AuthContext = createContext("");

export const Authstate = ({ children }) => {
  const [authinfo, setToken] = useState(localStorage.getItem("authinfo"));
  // function
  const saveToken = (authinfo1) => {
    setToken({ ...authinfo, token: authinfo1.token, email: authinfo1.email });
    return localStorage.setItem("authinfo", authinfo);
  };
  const email = authinfo ? authinfo.email : "";
  const deleteToken = () => {
    setToken(null);
    return localStorage.removeItem("authinfo");
  };
  return (
    <AuthContext.Provider value={{ authinfo, email, saveToken, deleteToken }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};

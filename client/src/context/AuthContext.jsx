import { createContext, useState } from "react";

export const AuthContext = createContext("");

const Authstate = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  // function
  const saveToken = (token) => {
    setToken(...token, token);
    localStorage.setItem("token", token);
  };

  const deleteToken = () => {
    setToken(null);
    localStorage.removeItem("token");
    return;
  };
  return (
    <AuthContext.Provider value={{ token, saveToken, deleteToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default Authstate;

import { createContext, useState } from "react";

export const AuthContext = createContext("");

const Authstate = (props) => {
  const [authinfo, setToken] = useState(localStorage.getItem("authinfo"));
  // function
  const saveToken = (authinfo1) => {
    setToken((prevstate) => {
      return { ...prevstate, token: authinfo1.token, email: authinfo1.email };
    });
    localStorage.setItem("authinfo", authinfo);
  };

  const deleteToken = () => {
    setToken(null);
    localStorage.removeItem("authinfo");
    return;
  };
  return (
    <AuthContext.Provider value={{ authinfo, saveToken, deleteToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default Authstate;

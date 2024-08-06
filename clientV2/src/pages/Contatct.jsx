import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
export default function Contatct() {
  const { token } = useContext(AuthContext);
  if (token != null) return <div>Contatct</div>;
  else return <Navigate to="/signin"></Navigate>;
}

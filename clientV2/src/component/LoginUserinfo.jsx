import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function LoginUserinfo() {
  const { authinfo } = useContext(AuthContext);
  return (
    <div className="container">
      <div className="row bg-primary mt-1 text-white">
        <div className="col">
          <p className="text-end">Welcome : {authinfo ? authinfo.email : ""}</p>
        </div>
      </div>
    </div>
  );
}

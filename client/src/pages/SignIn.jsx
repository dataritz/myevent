import Signinform from "../component/Signinform";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export default function SignIn() {
  const [userinfo, setuserinfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInput = (event) => {
    let targetname = event.target.name;
    let value = event.target.value;
    setuserinfo({ ...userinfo, [targetname]: value });
  };
  const { saveToken } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: await JSON.stringify(userinfo),
      });
      const x = await response.json();
      console.log(x.token);
      if (x.valid == 1) {
        saveToken(x.token);
        navigate("/");
      } else {
        alert("Not Valid User");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Signinform
        userinfo={userinfo}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

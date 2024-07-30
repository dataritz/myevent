import Signinform from "../component/Signinform";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      if (x.valid == 1) {
        navigate("/home");
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

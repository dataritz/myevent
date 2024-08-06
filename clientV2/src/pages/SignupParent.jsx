import { useState } from "react";
import Signup from "../component/Signup";

export default function SignupParent() {
  const [userinfo, setuserinfo] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    profile: "",
  });

  const handleInput = (event) => {
    let targetname = event.target.name;
    let value = event.target.value;
    setuserinfo({ ...userinfo, [targetname]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("hi");
      const p = await fetch(`http://localhost:3000/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: await JSON.stringify(userinfo),
      });
      console.log("byee");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Signup
      userinfo={userinfo}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    ></Signup>
  );
}

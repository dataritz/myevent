import Child from "./Child";

const Parent = () => {
  const name = "Gopal";
  return <Child name={name} age={23} />;
};
export default Parent;

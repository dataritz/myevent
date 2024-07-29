import Hero from "../component/Hero";
import About from "./About";

export default function Home() {
  return (
    <>
      <div className="container mt-3">
        <Hero />
        <h1 className="text-white bg-primary text-center mt-3">About</h1>
        <About />
      </div>
    </>
  );
}

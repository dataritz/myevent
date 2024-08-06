import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contatct from "./pages/Contatct";
import SignIn from "./pages/SignIn";
import SignupParent from "./pages/SignupParent";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import LoginUserinfo from "./component/LoginUserinfo";
import AddEvent from "./pages/AddEvent";
import SearchEvent from "./pages/SearchEvent";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <LoginUserinfo />
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contatct />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignupParent />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/addevent" element={<AddEvent />}></Route>
          <Route path="/searchevent" element={<SearchEvent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

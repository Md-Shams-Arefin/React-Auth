import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";
import Home from "./components/layouts/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Home />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};
export default Router;

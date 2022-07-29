import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <section className="appSection">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Main />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;

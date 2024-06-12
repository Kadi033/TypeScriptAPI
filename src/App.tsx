import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dotted from "./components/Dotted";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Dotted />
        <Footer />
      </div>
    </>
  );
}

export default App;

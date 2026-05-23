import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>

      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      {/* Route Configuration */}
      <Routes>

        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* About Route */}
        <Route path="/about" element={<About />} />

        {/* Contact Route */}
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
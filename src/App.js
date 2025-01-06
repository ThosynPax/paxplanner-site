import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewPage from "./NewPage";
import PrivacyPage from "./PrivacyPage";

const App = () => {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#f5f5f5" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/new" style={{ marginRight: "10px" }}>New Page</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to My React App!</h1>} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
};

export default App;

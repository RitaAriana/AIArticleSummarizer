import {BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import DemoPage from "./components/DemoPage/DemoPage";
import AuthorPage from "./components/AuthorPage/AuthorPage";

import './App.css'

// main part of the application
const App = () => {
  return (
    <Router>
      <main>
          <div className="main">
            <div className="gradient" />
          </div>
          <Routes>
            <Route path="/" element={<DemoPage />} />
            <Route path="/author" element={<AuthorPage />} />
          </Routes>
      </main>
    </Router>
   
  )
}

export default App
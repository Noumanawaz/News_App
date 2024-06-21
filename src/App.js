import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/news';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/sports" element={<News key="sports" category="sports" />} />
          <Route path="/business" element={<News key="business" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
          <Route path="/health" element={<News key="health" category="health" />} />
          <Route path="/science" element={<News key="science" category="science" />} />
          <Route path="/technology" element={<News key="technology" category="technology" />} />
          <Route path="/" element={<News category="general" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

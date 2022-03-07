import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopMenu from './components/TopMenu/TopMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;

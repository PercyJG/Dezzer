import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './components/Body/SideNav/SideNav';
import Main from './components/Body/Main/Main';
import Artist from './components/Body/Artist/Artist';
import Albums from './components/Body/Albums/Albums';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="body">
        <SideNav />
        <Routes>
          <Route exact path='/artist/:id' element={<Artist />} />
          <Route exact path='/artist/:id/tracks' element={<Main />} />
          <Route exact path='/artist/:id/albums' element={<Albums />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;

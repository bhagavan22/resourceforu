import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/adminpage'
import Test from './pages/test';

function App() {
  return (
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path='/test'element={<Test/>}/>
      </Routes>
  
  );
}

export default App;

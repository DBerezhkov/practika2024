import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Admin from './views/Admin';
import Calc from './views/Calc';
import AdminLogin from './views/AdminLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/admin/main' element={<Admin />} />
        <Route path='/Calc/:id' element={<Calc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

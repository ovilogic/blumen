import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Products from './pages/produse.js';

import NoPage from './pages/NoPage';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
          <Route path='/produse' element={<Products />}></Route>
          
         
          <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


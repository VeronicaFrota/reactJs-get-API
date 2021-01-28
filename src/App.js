import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produto from './Components/Produto';
import Produtos from './Components/Produtos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <div className="content">
            <Routes>
              <Route>
                <Route path="/" element={<Produtos />} />
                <Route path="produto/:id" element={<Produto />} />
                <Route path="contato" element={<Contato />} />
              </Route>
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

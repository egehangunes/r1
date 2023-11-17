import React from 'react';
import './App.css';
import Categories from './components/Categories';
import { FakeStoreProvider } from './context/FakeStoreContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sepet from './components/Sepet';
import { SepetProvider } from './context/SepetContext';

function App() {
  return (
    // FakeStoreProvider, kategorileri sağlayan Context API bileşenidir.
    <FakeStoreProvider>
      {/* SepetProvider, sepetteki ürünleri sağlayan Context API bileşenidir. */}
      <SepetProvider>
        <div className="App">
          <header className="App-header">
            <h1>FakeStoreAPI</h1>
            {/* React Router kullanarak sayfa yönlendirmesi yapılıyor */}
            <Router>
              <Routes>
                {/* Ana sayfa için Categories bileşeni */}
                <Route path="/" element={<Categories />} />
                {/* Sepet sayfası için Sepet bileşeni */}
                <Route path="/sepet" element={<Sepet />} />
              </Routes>
            </Router>
          </header>
        </div>
      </SepetProvider>
    </FakeStoreProvider>
  );
}

export default App;

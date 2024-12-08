import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Catalog from './pages/Catalog';
import About from './components/About';

const App: React.FC = () => {
  return (
    <ShopProvider>
      <Router>
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ShopProvider>
  );
};

export default App;

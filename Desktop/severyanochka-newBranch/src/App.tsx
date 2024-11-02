import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/index.css';
// import './App.css';
import './index.tsx'
import Header from './pages/header';
import Footer from './pages/footer';
import Home from '../src/pages/home'
import About from './components/about';
import Contacts from './components/contakts';
import Vacancies from './components/vacancies';


function App() {
  return (
    <>
    <Router>
      <div className="appContainer">
        <Header /> 
        <div className="contentWrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/vacancies" element={<Vacancies />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;

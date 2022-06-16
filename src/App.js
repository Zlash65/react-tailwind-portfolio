import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/Home';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import Footer from './components/Footer';
import BackTopBtn from './components/BackTopBtn';

const App = () => {
  return (
    <div className='bg-white relative'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePage />}/>
          <Route path='/homepage' exact element={<HomePage />}/>
          <Route path='/portfolio' exact element={<PortfolioPage />}/>
          <Route path='/contact' exact element={<ContactPage />}/>
        </Routes>
        <Footer />
        <BackTopBtn />
      </Router>
    </div>
  );
};

export default App;

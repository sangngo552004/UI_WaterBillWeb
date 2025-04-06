import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewsPage from './pages/NewsPage';
import PricingPage from "./pages/PricingPage";
import RegisterPage from "./pages/RegisterPage";
import LookupPage from "./pages/LookupPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import './styles/App.css';

const App = () => {
  return (
      <Router>
          <div >
              <Header />
              <div>
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/news/*" element={<NewsPage />} /> {/* Corrected route path */}
                      <Route path="/pricing" element = {<PricingPage />} />
                      {/* <Route path="/dashboard" element={<Dashboard />} />
                    //   <Route path="/household/:id" element={<HouseholdDetail />} /> */}
                      <Route path="/register" element={<RegisterPage />} />
                      <Route path="/lookup" element={<LookupPage />} />
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
  );
};

export default App;

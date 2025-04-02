import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewsPage from './pages/NewsPage';
import NewsDetail from './features/News/NewsDetail';
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
                      <Route path="/news" element={<NewsPage />} /> {/* Corrected route path */}
                      <Route path="/news/:id" element={<NewsDetail />} /> {/* Uncommented route */}
                      {/* <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/household/:id" element={<HouseholdDetail />} />
                      <Route path="/admin" element={<AdminPanel />} /> */}
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
  );
};

export default App;

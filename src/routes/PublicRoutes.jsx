// src/routes/PublicRoutes.js
import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout'
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/public/LoginPage';
import NewsPage from '../pages/public/NewsPage';
import PricingPage from "../pages/public/PricingPage";
import RegisterPage from "../pages/public/RegisterPage";
import LookupPage from "../pages/public/LookupPage";
import SignUpPage from "../pages/public/SignUpPage";


const PublicRoutes = () => (
  <Routes>
    <Route  path = "/" element={<PublicLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path ="sign-up" element = {<SignUpPage />} />
        <Route path="news/*" element={<NewsPage />} /> {/* Corrected route path */}
        <Route path="pricing" element = {<PricingPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="lookup" element={<LookupPage />} />
    </Route>
  </Routes>
);

export default PublicRoutes;
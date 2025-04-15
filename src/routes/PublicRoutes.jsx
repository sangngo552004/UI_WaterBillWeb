// src/routes/PublicRoutes.js
import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout'
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/public/LoginPage';
import PricingPage from "../pages/public/PricingPage";
import RegisterPage from "../pages/public/RegisterPage";
import LookupPage from "../pages/public/LookupPage";
import SignUpPage from "../pages/public/SignUpPage";
import NewsListPage from "../pages/public/NewsListPage";
import NewsDetailPage from "../pages/public/NewsDetailPage";
import OnlinePaymentPage from "../pages/public/OnlinePaymentPage";
import SupportPaymentPage from "../pages/public/SupportPaymentPage";
import ForgetPasswordPage from '../pages/public/ForgetPassword';
import OtpConfirmPage from '../pages/public/OtpConfirmPage';
import ResetPasswordPage from '../pages/public/ResetPasswordPage';
import SuccessPage from '../pages/public/SuccessPage';



const PublicRoutes = () => (
  <Routes>
    <Route  path = "/" element={<PublicLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="dang-nhap" element={<LoginPage />} />
        <Route path ="dang-ky" element = {<SignUpPage />} />
        <Route path = "tin-tuc">
            <Route path="" element={<NewsListPage  />} />
            <Route path=":id" element={<NewsDetailPage />} />
        </Route>
          <Route path="quen-mat-khau" >
          <Route path="" element={<ForgetPasswordPage  />} />
          <Route path="xac-nhan-otp" element={<OtpConfirmPage />} />
          <Route path="dat-lai-mat-khau" element={<ResetPasswordPage />} />
          <Route path="thanh-cong" element={<SuccessPage />} />
        </Route>
        <Route path="bang-gia" element = {<PricingPage />} />
        <Route path="dang-ky-dich-vu" element={<RegisterPage />} />
        <Route path="tra-cuu" element={<LookupPage />} />
        <Route path="thanh-toan-truc-tuyen" element={<OnlinePaymentPage />} />
        <Route path="huong-dan-thanh-toan" element={<SupportPaymentPage />} />
    </Route>
  </Routes>
);

export default PublicRoutes;
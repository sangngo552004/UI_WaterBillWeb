import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout'
import AdminDashboardPage from '../pages/admin/AdminDashboardPage';
import AdminSupportPage from '../pages/admin/AdminSupportPage';
import AdminStatisticsPage from '../pages/admin/AdminStatisticsPage';
import AdminStaffManagementPage from '../pages/admin/AdminStaffManagementPage';
import AdminBillManagementPage from '../pages/admin/AdminBillManagementPage';
import AdminHouseholdManagementPage from '../pages/admin/AdminHouseholdManagementPage';
import AdminWaterPricePage from '../pages/admin/AdminWaterPricePage';
import AdminWaterMeterPage from '../pages/admin/AdminWaterMeterPage';
import AdminWaterMeterReadingPage from '../pages/admin/AdminWaterMeterReadingPage';
import AdminSettingPage from '../pages/admin/AdminSettingPage';
import AdminServiceRegistrationPage from '../pages/admin/AdminServiceRegistrationPage';
import AdminAccountPage from '../pages/admin/AdminAccountPage';
import AdminNewsManagementPage from '../pages/admin/AdminNewsManagementPage';
import AdminLoginPage from '../pages/admin/AdminLoginPage';




const AdminRoutes = () => (
  <Routes>
    <Route path="dang-nhap" element={<AdminLoginPage />} />
    <Route  path = "/" element={<AdminLayout />}>
        <Route path="cai-dat" element={<AdminSettingPage />} />
        <Route path="chi-so-nuoc" element={<AdminWaterMeterReadingPage />} />
        <Route path="dong-ho-nuoc" element={<AdminWaterMeterPage />} />
        <Route path="gia-nuoc" element={<AdminWaterPricePage />} />
        <Route path="ho-gia-dinh" element={<AdminHouseholdManagementPage />} />
        <Route path="hoa-don" element={<AdminBillManagementPage />} />
        <Route path="nhan-vien" element={<AdminStaffManagementPage />} />
        <Route path="thong-ke" element={<AdminStatisticsPage />} />
        <Route path="yeu-cau" element={< AdminSupportPage/>} />
        <Route path="dang-ky-dich-vu" element = {< AdminServiceRegistrationPage />} />
        <Route path="tai-khoan" element = {< AdminAccountPage />} />
        <Route path="tin-tuc" element = {< AdminNewsManagementPage />} />
        <Route path="" element={<AdminDashboardPage />} />
    </Route>
  </Routes>
);

export default AdminRoutes;
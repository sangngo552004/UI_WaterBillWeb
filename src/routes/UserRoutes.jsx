import { Routes, Route } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout'
import UserBillsPage from '../pages/user/UserBillsPage';
import UserBillDetailPage from '../pages/user/UserBillDetailPage';
import UserNotificationsPage from '../pages/user/UserNotificationsPage';
import UserHouseholdPage from '../pages/user/UserHouseholdPage';
import UserHouseholdDetailPage from '../pages/user/UserHouseholdDetailPage';
import UserAccountPage from '../pages/user/UserAccountPage';



const UserRoutes = () => (
  <Routes>
    <Route  path = "/" element={<UserLayout />}>
        <Route path= "hoa-don">
          <Route path="" element={<UserBillsPage />} />
          <Route path=":id" element={<UserBillDetailPage />} />
        </Route>
        <Route path="thong-bao" element={<UserNotificationsPage />} />
        <Route path = "">
            <Route path="" element={<UserHouseholdPage />} />
            <Route path=":id" element={<UserHouseholdDetailPage />} />
        </Route>
        <Route path="tai-khoan" element={<UserAccountPage />} />
    </Route>
  </Routes>
);

export default UserRoutes;
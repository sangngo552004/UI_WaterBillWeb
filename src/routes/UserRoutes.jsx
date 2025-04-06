import { Routes, Route } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout'
import UserDashboardPage from '../pages/user/UserDashboardPage';




const UserRoutes = () => (
  <Routes>
    <Route  path = "/" element={<UserLayout />}>
        <Route path="" element={<UserDashboardPage />} />
    </Route>
  </Routes>
);

export default UserRoutes;
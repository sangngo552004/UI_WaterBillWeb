import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PublicLayout = () => (
  <div className="public-layout">
    <Header /> {/* Header đơn giản */}
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default PublicLayout;

import React, { useEffect } from 'react';
import {useLocation } from 'react-router-dom';
import { WaterTips } from '../../features/Home/WaterTips';
import Support from '../../features/Home/Support';
import Intro from '../../features/Home/Intro';
import NewsSection from '../../features/Home/NewsSection';
import SectionHeader from '../../components/common/SectionHeader';




const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('location:', location);
    console.log('location.state:', location.state);
    if (location.state?.scrollTo === 'contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
     
      window.history.replaceState({}, document.title, '/');
    }
  }, [location]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-10">
      {/* Phần giới thiệu */}
      
      <Intro />
     
      {/* Phần tin tức (hiển thị 3 tin mới nhất) */}
      <NewsSection />

      {/* Phần mẹo tiết kiệm nước */}

      <WaterTips />
      
      {/* Phần thông tin liên hệ */}
        <div id="contact"></div>
      <Support  />
    </div>
  );
};

export default HomePage;

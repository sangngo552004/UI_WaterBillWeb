// import React from 'react';
// import Home from '../features/Home/Home';

// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { truncateContent } from '../../utils/helpers';
import { WaterTips } from '../../features/Home/WaterTips';
import Support from '../../features/Home/Support';
import Intro from '../../features/Home/Intro';



const HomePage = () => {
  const [news, setNews] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:3001/news');
        const data = await response.json();
        
        data.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

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
      <section className="mb-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">Tin tức mới nhất</h1>
        {/* Ở đây bạn sẽ cần lấy dữ liệu tin tức từ đâu đó (ví dụ: API, file JSON) */}
        {/* Tạm thời, chúng ta sẽ hiển thị tin tức mẫu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.slice(0, 3).map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-md p-4">
                  <h3 className="font-bold text-blue-600 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{truncateContent(item.content, 100)}</p>
                  <Link to={`/news/${item.id}`} className="text-blue-500 hover:text-blue-700 mt-2 inline-block">Xem thêm</Link>
                </div>
              ))}
        </div>
        <div className="mt-4 text-center ">
            <Link to="/news">
                <Button className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                            >Xem tất cả tin tức</Button>
            </Link>
        </div>
      </section>

      {/* Phần mẹo tiết kiệm nước */}
      <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">Các mẹo sử dụng nước hiệu quả.</h1>
      <WaterTips />
      

      {/* Phần thông tin liên hệ */}
        <div id="contact"></div>
      <Support  />
    </div>
  );
};

export default HomePage;

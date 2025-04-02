import React from 'react';
import { Link } from 'react-router-dom';


const Intro = () => {
    return (
        <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Chào mừng đến với dịch vụ nước sạch</h2>
            <p className="text-gray-600 mb-6">
              Chúng tôi cung cấp dịch vụ nước sạch chất lượng cao, đảm bảo an toàn và tiện lợi cho mọi gia đình. Với
              nhiều năm kinh nghiệm, chúng tôi cam kết mang đến nguồn nước sạch và dịch vụ chăm sóc khách hàng tốt nhất.
            </p>
            <div className="flex gap-4">
              <Link to="/registeter-service" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Đăng ký ngay
              </Link>
                
              <a
                href="#contact"
                className="border border-blue-600 text-blue-600 hover:bg-sky-50 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Liên hệ hỗ trợ
              </a>
            </div>
          </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden">
            <img src="/water.png" alt="Dịch vụ nước sạch" fill className="object-cover" />
            </div>
            
            
        </div>
      </section>
    );
};

export default Intro;
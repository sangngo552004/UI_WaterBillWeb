import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-blue-400 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">WaterBill</h3>
              <p className="text-blue-100">
                Cung cấp dịch vụ nước sạch và quản lý hóa đơn nước hiệu quả cho khách hàng.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-blue-100 hover:text-white">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link to="/bang-gia" className="text-blue-100 hover:text-white">
                    Bảng giá
                  </Link>
                </li>
                <li>
                  <Link to="/lien-he" className="text-blue-100 hover:text-white">
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <Link to="/tin-tuc" className="text-blue-100 hover:text-white">
                    Tin tức
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/dang-ky-dich-vu" className="text-blue-100 hover:text-white">
                    Đăng ký dịch vụ
                  </Link>
                </li>
                <li>
                  <Link href="/tra-cuu" className="text-blue-100 hover:text-white">
                    Thanh toán hóa đơn
                  </Link>
                </li>
                <li>
                  <Link href="/ho-tro" className="text-blue-100 hover:text-white">
                    Hỗ trợ khách hàng
                  </Link>
                </li>
                <li>
                  <Link href="/tra-cuu" className="text-blue-100 hover:text-white">
                    Tra cứu hóa đơn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
              <address className="not-italic text-blue-100">
                <p>123 Đường Nước, Quận 1</p>
                <p>TP. Hồ Chí Minh, Việt Nam</p>
                <p className="mt-2">Điện thoại: 0123 456 789</p>
                <p>Email: info@waterbill.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-blue-500 mt-8 pt-6 text-center text-blue-200">
            <p>© 2024 WaterBill. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
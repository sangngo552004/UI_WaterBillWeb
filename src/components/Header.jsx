// src/components/Header.jsx
import React  from 'react';
import { Button } from "@/components/ui/button";
import { Link , useLocation} from "react-router-dom";
import { Droplet } from 'lucide-react'; // Import icon Droplet

export default function Header() {

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo / Brand với Icon */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-2xl font-bold tracking-tight text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Droplet className="w-6 h-6" /> {/* Icon giọt nước */}
          <span>WaterBill</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
        <Link
              to="/"
              className={`text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200 ${
                isActive("/") ? "text-blue-700 font-bold active-link" : ""
              }`}
          >
            Trang chủ
          </Link>
          <Link 
            to="/bang-gia" 
            className={`text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200 ${
              isActive("/bang-gia") ? "text-blue-700 font-bold active-link" : ""
            }`}
          >
            Bảng giá
          </Link>
          <Link 
            to="/" state={{ scrollTo: 'contact' }}
            className="text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200 "
          >
            Hỗ trợ
          </Link>
          <Link 
            to="/tin-tuc"
            className={`text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200 ${
              isActive("/tin-tuc") ? "text-blue-700 font-bold active-link" : ""
            }`}
          >
            Tin tức
          </Link>
          <Link 
            to="/tra-cuu" 
            className={`text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200 ${
              isActive("/tra-cuu") ? "text-blue-700 font-bold active-link" : ""
            }`}
          >
            Tra cứu
          </Link>
          <Link 
            to="/dang-ky-dich-vu" 
            className={`text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200 ${
              isActive("/dang-ly-dich-vu") ? "text-blue-700 font-bold active-link" : ""
            }`}
          >
            Đăng ký dịch vụ
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <Link to="/dang-nhap">
            <Button 
              variant="ghost" 
              className="text-sm font-medium text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              Đăng nhập
            </Button>
          </Link>
          <Link to="/dang-ky">
            <Button 
              className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              Đăng ký
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
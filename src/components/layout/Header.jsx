// src/components/Header.jsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Droplet } from 'lucide-react'; // Import icon Droplet

export default function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
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
            className="text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            Trang chủ
          </Link>
          <Link 
            to="/pricing" 
            className="text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            Bảng giá
          </Link>
          <Link 
            to="/" 
            className="text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200"
            onClick={scrollToContact}
          >
            Liên hệ
          </Link>
          <Link 
            to="/news" 
            className="text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            Tin tức
          </Link>
          <Link 
            to="/lookup" 
            className="text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            Tra cứu
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <Link to="/login">
            <Button 
              variant="ghost" 
              className="text-sm font-medium text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              Đăng nhập
            </Button>
          </Link>
          <Link to="/register">
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
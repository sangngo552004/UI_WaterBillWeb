import { React } from "react"
import {  Home, LogOut, User, Users, Newspaper } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"


const SideBardUser = ( )  => {
  const { logout } = useAuth(); // Lấy hàm logout
  const location = useLocation(); // Lấy location để active link

  const isActive = (path) => {
    
    return location.pathname === path || (path !== '/user' && location.pathname.startsWith(path));
  };

  const handleLogout = () => {
    logout();
  };
    return (
    <aside className="w-64 border-r hidden md:block">
              <nav className="p-4 space-y-2">
                <Link
                  to="/user"
                 // Active khi là /user hoặc /user/:id (trang chi tiết hộ)
                  className={`flex items-center space-x-2 p-2 rounded-md text-sm font-medium ${
                    isActive("/user")
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Home className="h-5 w-5" />
                  <span>Trang chủ</span>
                </Link>
              
                <Link
                  to="/user/tai-khoan"
                  className={`flex items-center space-x-2 p-2 rounded-md text-sm font-medium ${
                    isActive("/user/tai-khoan")
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>Tài khoản</span>
                </Link>
                <div className="pt-4 mt-4 border-t">
                  <Button variant="ghost"
                               className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                               onClick={handleLogout}
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Đăng xuất
                  </Button>
                </div>
              </nav>
            </aside>
            )
}


export default SideBardUser;




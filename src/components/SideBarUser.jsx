import { React } from "react"
import {  Home, LogOut, User, Users, Newspaper } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"


const SideBardUser = ( )  => {

    return (
    <aside className="w-64 border-r hidden md:block">
              <nav className="p-4 space-y-2">
                <Link
                  to="/user"
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                >
                  <Home className="h-5 w-5" />
                  <span>Trang chủ</span>
                </Link>
                <Link
                  to="/user/ho-tro"
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                >
                  <Newspaper className="h-5 w-5" />
                  <span>Hỗ trợ</span>
                </Link>
                <Link
                  to="/user/tai-khoan"
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                >
                  <User className="h-5 w-5" />
                  <span>Tài khoản</span>
                </Link>
                <div className="pt-4 mt-4 border-t">
                  <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                    <LogOut className="h-5 w-5 mr-2" />
                    Đăng xuất
                  </Button>
                </div>
              </nav>
            </aside>
            )
}


export default SideBardUser;




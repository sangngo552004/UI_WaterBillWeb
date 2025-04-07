import React  from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom"
import { Bell } from "lucide-react"


export default function HeaderUser() {

    return (
        <header className="border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <path d="M12 22a8 8 0 0 1-8-8c0-3.502 2.667-8.334 8-14 5.333 5.666 8 10.498 8 14a8 8 0 0 1-8 8Z" />
            </svg>
            <span className="text-xl font-bold text-blue-500">WaterBill</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <Link to="/user" className="text-gray-600 hover:text-blue-500">
              Trang chủ
            </Link>
            <Link to="/user/ho-gia-dinh" className="text-gray-600 hover:text-blue-500">
              Hộ gia đình
            </Link>
            <Link to="/user/hoa-don" className="text-gray-600 hover:text-blue-500">
              Hóa đơn
            </Link>
            <Link to="/user/ho-tro" className="text-gray-600 hover:text-blue-500">
              Hỗ trợ
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="Avatar" />
                <AvatarFallback>NN</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Nguyễn Văn A</span>
            </div>
          </div>
        </div>
      </header>
    )
}
import { React } from "react";
import {Link} from "react-router-dom";
import {
  Newspaper,
  ClipboardList,
  BarChart3,
  FileText,
  Home,
  Settings,
  Users,
  Droplet,
  Calculator,
  FileQuestion,
  CreditCard,
  LayoutDashboard,
} from "lucide-react";




const SideBarAdmin = () => {
    return (
        <aside className="w-64 border-r hidden md:block bg-gray-50">
        <div className="flex items-center space-x-2 p-6 border-b">
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
        <nav className="p-4 space-y-1">
          <Link
            to="/admin"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Tổng quan</span>
          </Link>
          <Link
            to="/admin/ho-gia-dinh"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <Home className="h-5 w-5" />
            <span>Hộ gia đình</span>
          </Link>
          <Link
            to="/admin/hoa-don"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <FileText className="h-5 w-5" />
            <span>Hóa đơn</span>
          </Link>
          <Link
            to="/admin/nhan-vien"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <Users className="h-5 w-5" />
            <span>Nhân viên</span>
          </Link>
          <Link
            to="/admin/gia-nuoc"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <CreditCard className="h-5 w-5" />
            <span>Giá nước</span>
          </Link>
          <Link
            to="/admin/chi-so-nuoc"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <Calculator className="h-5 w-5" />
            <span>Chỉ số nước</span>
          </Link>
          <Link
            to="/admin/dong-ho-nuoc"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <Droplet className="h-5 w-5" />
            <span>Đồng hồ nước</span>
          </Link>
          <Link
            to="/admin/yeu-cau"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <FileQuestion className="h-5 w-5" />
            <span>Yêu cầu hỗ trợ</span>
          </Link>
          <Link
            to="/admin/tin-tuc"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <Newspaper className="h-5 w-5" />
            <span>Tin tức</span>
          </Link>
          <Link
            to="/admin/dang-ky-dich-vu"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <ClipboardList className="h-5 w-5" />
            <span>Đăng ký dịch vụ</span>
          </Link>
          <Link
            to="/admin/thong-ke"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <BarChart3 className="h-5 w-5" />
            <span>Thống kê</span>
          </Link>
          <Link
            to="/admin/cai-dat"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <Settings className="h-5 w-5" />
            <span>Cài đặt</span>
          </Link>
        </nav>
      </aside>
    )
}

export default SideBarAdmin;
import {React} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {
  Home,
  CreditCard,
  FileText,
  Droplet,
} from "lucide-react";

const AdminDashboardPage = () => {

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Tổng quan</h1>
            <div className="flex items-center space-x-2">
                <Button variant="outline">Xuất báo cáo</Button>
                <Button>Tạo hóa đơn mới</Button>
            </div>
            </div>
    
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tổng số hộ gia đình</CardTitle>
                <Home className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">1,245</div>
                <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+5.2%</span> so với tháng trước
                </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Doanh thu tháng này</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">352,500,000 VNĐ</div>
                <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+8.1%</span> so với tháng trước
                </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hóa đơn chưa thanh toán</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs text-muted-foreground">
                    <span className="text-red-500">+12.5%</span> so với tháng trước
                </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tổng lượng nước tiêu thụ</CardTitle>
                <Droplet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">28,560 m³</div>
                <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">-2.5%</span> so với tháng trước
                </p>
                </CardContent>
            </Card>
            </div>
    
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                <CardTitle>Doanh thu theo tháng</CardTitle>
                <CardDescription>Biểu đồ doanh thu 6 tháng gần nhất</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="h-[300px]">
                    <div className="h-full w-full flex items-end justify-between gap-2">
                    <div className="relative flex flex-col items-center">
                        <div className="h-[180px] w-16 bg-blue-200 rounded-t-md"></div>
                        <span className="mt-2 text-xs">T11/24</span>
                        <span className="text-xs font-medium">320tr</span>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="h-[220px] w-16 bg-blue-300 rounded-t-md"></div>
                        <span className="mt-2 text-xs">T12/24</span>
                        <span className="text-xs font-medium">380tr</span>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="h-[200px] w-16 bg-blue-200 rounded-t-md"></div>
                        <span className="mt-2 text-xs">T1/25</span>
                        <span className="text-xs font-medium">350tr</span>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="h-[230px] w-16 bg-blue-300 rounded-t-md"></div>
                        <span className="mt-2 text-xs">T2/25</span>
                        <span className="text-xs font-medium">390tr</span>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="h-[250px] w-16 bg-blue-400 rounded-t-md"></div>
                        <span className="mt-2 text-xs">T3/25</span>
                        <span className="text-xs font-medium">420tr</span>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="h-[270px] w-16 bg-blue-500 rounded-t-md"></div>
                        <span className="mt-2 text-xs">T4/25</span>
                        <span className="text-xs font-medium">450tr</span>
                    </div>
                    </div>
                </div>
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                <CardTitle>Lượng nước tiêu thụ theo loại khách hàng</CardTitle>
                <CardDescription>Phân bổ lượng nước tiêu thụ trong tháng 4/2025</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                    <div className="relative h-64 w-64 rounded-full border-8 border-blue-500 flex items-center justify-center">
                    <div className="absolute inset-0 border-8 border-transparent border-t-green-500 border-r-green-500 rounded-full transform rotate-45"></div>
                    <div className="absolute inset-0 border-8 border-transparent border-b-yellow-500 rounded-full transform rotate-[200deg]"></div>
                    <div className="h-48 w-48 rounded-full bg-white flex items-center justify-center">
                        <div className="text-center">
                        <div className="text-xl font-bold">28,560 m³</div>
                        <div className="text-sm text-muted-foreground">Tổng lượng nước</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <div className="text-sm">
                        <div>Hộ gia đình</div>
                        <div className="text-muted-foreground">65%</div>
                    </div>
                    </div>
                    <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="text-sm">
                        <div>Doanh nghiệp</div>
                        <div className="text-muted-foreground">25%</div>
                    </div>
                    </div>
                    <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="text-sm">
                        <div>Cơ quan</div>
                        <div className="text-muted-foreground">10%</div>
                    </div>
                    </div>
                </div>
                </CardContent>
            </Card>
            </div>
    
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
                <CardHeader>
                <CardTitle>Hóa đơn gần đây</CardTitle>
                <CardDescription>Danh sách các hóa đơn được tạo gần đây</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="space-y-4">
                    <div className="grid grid-cols-5 text-sm font-medium text-muted-foreground">
                    <div>Mã hóa đơn</div>
                    <div>Khách hàng</div>
                    <div>Ngày tạo</div>
                    <div>Số tiền</div>
                    <div>Trạng thái</div>
                    </div>
                    <div className="grid grid-cols-5 items-center text-sm border-b pb-2">
                    <div>HD12345</div>
                    <div>Nguyễn Văn A</div>
                    <div>05/04/2025</div>
                    <div>320,000 VNĐ</div>
                    <div>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                        Chưa thanh toán
                        </span>
                    </div>
                    </div>
                    <div className="grid grid-cols-5 items-center text-sm border-b pb-2">
                    <div>HD12344</div>
                    <div>Trần Thị B</div>
                    <div>05/04/2025</div>
                    <div>285,000 VNĐ</div>
                    <div>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                        Chưa thanh toán
                        </span>
                    </div>
                    </div>
                    <div className="grid grid-cols-5 items-center text-sm border-b pb-2">
                    <div>HD12343</div>
                    <div>Lê Văn C</div>
                    <div>04/04/2025</div>
                    <div>410,000 VNĐ</div>
                    <div>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                        Đã thanh toán
                        </span>
                    </div>
                    </div>
                    <div className="grid grid-cols-5 items-center text-sm border-b pb-2">
                    <div>HD12342</div>
                    <div>Phạm Thị D</div>
                    <div>04/04/2025</div>
                    <div>350,000 VNĐ</div>
                    <div>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                        Đã thanh toán
                        </span>
                    </div>
                    </div>
                    <div className="grid grid-cols-5 items-center text-sm">
                    <div>HD12341</div>
                    <div>Vũ Văn E</div>
                    <div>03/04/2025</div>
                    <div>290,000 VNĐ</div>
                    <div>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                        Đã thanh toán
                        </span>
                    </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-center">
                    <Button variant="outline" size="sm">
                    Xem tất cả hóa đơn
                    </Button>
                </div>
                </CardContent>
            </Card>
    
            <Card>
                <CardHeader>
                <CardTitle>Yêu cầu hỗ trợ gần đây</CardTitle>
                <CardDescription>Danh sách các yêu cầu hỗ trợ mới nhất</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="space-y-4">
                    <div className="border rounded-lg p-3">
                    <div className="flex items-start justify-between">
                        <div>
                        <h3 className="font-medium">Đồng hồ nước bị hỏng</h3>
                        <p className="text-sm text-muted-foreground">Nguyễn Văn A - 05/04/2025</p>
                        </div>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-red-50 text-red-600 border-red-300">
                        Mới
                        </span>
                    </div>
                    </div>
                    <div className="border rounded-lg p-3">
                    <div className="flex items-start justify-between">
                        <div>
                        <h3 className="font-medium">Rò rỉ nước</h3>
                        <p className="text-sm text-muted-foreground">Trần Thị B - 04/04/2025</p>
                        </div>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                        Đang xử lý
                        </span>
                    </div>
                    </div>
                    <div className="border rounded-lg p-3">
                    <div className="flex items-start justify-between">
                        <div>
                        <h3 className="font-medium">Hóa đơn sai thông tin</h3>
                        <p className="text-sm text-muted-foreground">Lê Văn C - 03/04/2025</p>
                        </div>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                        Đang xử lý
                        </span>
                    </div>
                    </div>
                    <div className="border rounded-lg p-3">
                    <div className="flex items-start justify-between">
                        <div>
                        <h3 className="font-medium">Thay đổi thông tin liên hệ</h3>
                        <p className="text-sm text-muted-foreground">Phạm Thị D - 02/04/2025</p>
                        </div>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                        Đã xử lý
                        </span>
                    </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-center">
                    <Button variant="outline" size="sm">
                    Xem tất cả yêu cầu
                    </Button>
                </div>
                </CardContent>
            </Card>
            </div>
        </div>
        )
}

export default AdminDashboardPage;
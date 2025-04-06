import { BarChart3, Bell, Droplet, FileText, Home, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const  UserDashboardPage = () =>  {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Trang chủ</h1>
        <Button variant="outline">Xem tất cả hộ gia đình</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng số hộ gia đình</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Bạn đang là thành viên của 2 hộ gia đình</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hóa đơn chưa thanh toán</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Bạn có 1 hóa đơn cần thanh toán</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Thông báo mới</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Bạn có 3 thông báo mới chưa đọc</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Hộ gia đình của bạn</CardTitle>
            <CardDescription>Danh sách các hộ gia đình mà bạn đang là thành viên</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Hộ gia đình Nguyễn Văn A</h3>
                    <p className="text-sm text-muted-foreground">Mã hộ: HGD001</p>
                    <p className="text-sm text-muted-foreground">Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Xem chi tiết
                  </Button>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Hộ gia đình Trần Thị B</h3>
                    <p className="text-sm text-muted-foreground">Mã hộ: HGD002</p>
                    <p className="text-sm text-muted-foreground">Địa chỉ: 456 Đường XYZ, Quận 2, TP.HCM</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Xem chi tiết
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Xin tham gia hộ gia đình khác
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Thông báo gần đây</CardTitle>
            <CardDescription>Các thông báo mới nhất từ hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">Hóa đơn tháng 4/2025 đã được phát hành</h3>
                    <p className="text-sm text-muted-foreground">Vui lòng thanh toán trước ngày 15/04/2025</p>
                  </div>
                  <span className="text-xs text-muted-foreground">Hôm nay</span>
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">Thanh toán hóa đơn thành công</h3>
                    <p className="text-sm text-muted-foreground">Hóa đơn tháng 3/2025 đã được thanh toán</p>
                  </div>
                  <span className="text-xs text-muted-foreground">Hôm qua</span>
                </div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">Thông báo bảo trì hệ thống</h3>
                    <p className="text-sm text-muted-foreground">
                      Hệ thống sẽ bảo trì từ 22:00 - 23:00 ngày 10/04/2025
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">3 ngày trước</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Xem tất cả thông báo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lượng nước sử dụng gần đây</CardTitle>
          <CardDescription>Biểu đồ lượng nước sử dụng trong 6 tháng gần nhất</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-end justify-between gap-2">
            <div className="relative flex flex-col items-center">
              <div className="h-[120px] w-12 bg-blue-200 rounded-t-md"></div>
              <span className="mt-2 text-xs">T11/24</span>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="h-[150px] w-12 bg-blue-300 rounded-t-md"></div>
              <span className="mt-2 text-xs">T12/24</span>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="h-[100px] w-12 bg-blue-200 rounded-t-md"></div>
              <span className="mt-2 text-xs">T1/25</span>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="h-[130px] w-12 bg-blue-300 rounded-t-md"></div>
              <span className="mt-2 text-xs">T2/25</span>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="h-[160px] w-12 bg-blue-400 rounded-t-md"></div>
              <span className="mt-2 text-xs">T3/25</span>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="h-[140px] w-12 bg-blue-500 rounded-t-md"></div>
              <span className="mt-2 text-xs">T4/25</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Mẹo tiết kiệm nước</CardTitle>
            <CardDescription>Các mẹo giúp bạn tiết kiệm nước và giảm chi phí</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Droplet className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Kiểm tra rò rỉ nước thường xuyên</h3>
                  <p className="text-sm text-muted-foreground">
                    Một vòi nước rỉ nhỏ có thể lãng phí hàng ngàn lít nước mỗi năm.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Droplet className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Tắt vòi nước khi không sử dụng</h3>
                  <p className="text-sm text-muted-foreground">
                    Đảm bảo tắt vòi nước khi đánh răng, rửa mặt hoặc rửa chén để tiết kiệm nước.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Droplet className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Sử dụng vòi sen tiết kiệm nước</h3>
                  <p className="text-sm text-muted-foreground">
                    Vòi sen tiết kiệm nước có thể giảm lượng nước sử dụng đến 20% mà vẫn đảm bảo áp lực nước tốt.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hỗ trợ khách hàng</CardTitle>
            <CardDescription>Liên hệ với chúng tôi khi bạn cần hỗ trợ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Trung tâm hỗ trợ</h3>
                  <p className="text-sm text-muted-foreground">
                    Truy cập trung tâm hỗ trợ để tìm câu trả lời cho các câu hỏi thường gặp.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-blue-500">
                    Xem trung tâm hỗ trợ
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Bell className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Gửi yêu cầu hỗ trợ</h3>
                  <p className="text-sm text-muted-foreground">
                    Gửi yêu cầu hỗ trợ và chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-blue-500">
                    Gửi yêu cầu
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Báo cáo sự cố</h3>
                  <p className="text-sm text-muted-foreground">
                    Báo cáo sự cố về đồng hồ nước, rò rỉ hoặc các vấn đề khác.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-blue-500">
                    Báo cáo sự cố
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default UserDashboardPage;
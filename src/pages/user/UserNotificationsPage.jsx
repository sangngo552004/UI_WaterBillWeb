import { Check, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const UserNotificationsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Thông báo</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Lọc
          </Button>
          <Button variant="outline" size="sm">
            Đánh dấu tất cả đã đọc
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="unread">Chưa đọc</TabsTrigger>
          <TabsTrigger value="bills">Hóa đơn</TabsTrigger>
          <TabsTrigger value="system">Hệ thống</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-4">
          <Card className="border-l-4 border-blue-500">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">Hóa đơn tháng 4/2025 đã được phát hành</CardTitle>
                  <CardDescription>Vui lòng thanh toán trước ngày 15/04/2025</CardDescription>
                </div>
                <div className="text-xs text-muted-foreground">Hôm nay, 10:30</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Hóa đơn tiền nước tháng 4/2025 của hộ gia đình Nguyễn Văn A đã được phát hành với số tiền 320.000 VNĐ.
                Vui lòng thanh toán trước ngày 15/04/2025 để tránh bị phạt trễ hạn.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button variant="link" className="h-auto p-0">
                Xem hóa đơn
              </Button>
              <Button variant="ghost" size="sm" className="h-8">
                <Check className="h-4 w-4 mr-1" />
                Đánh dấu đã đọc
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">Thanh toán hóa đơn thành công</CardTitle>
                  <CardDescription>Hóa đơn tháng 3/2025 đã được thanh toán</CardDescription>
                </div>
                <div className="text-xs text-muted-foreground">Hôm qua, 15:45</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Cảm ơn bạn đã thanh toán hóa đơn tiền nước tháng 3/2025 với số tiền 285.000 VNĐ. Giao dịch đã được xác
                nhận thành công.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button variant="link" className="h-auto p-0">
                Xem chi tiết
              </Button>
              <Button variant="ghost" size="sm" className="h-8">
                <Check className="h-4 w-4 mr-1" />
                Đánh dấu đã đọc
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">Thông báo bảo trì hệ thống</CardTitle>
                  <CardDescription>Hệ thống sẽ bảo trì từ 22:00 - 23:00 ngày 10/04/2025</CardDescription>
                </div>
                <div className="text-xs text-muted-foreground">3 ngày trước</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Hệ thống WaterBill sẽ tiến hành bảo trì từ 22:00 - 23:00 ngày 10/04/2025. Trong thời gian này, bạn sẽ
                không thể truy cập vào hệ thống. Chúng tôi xin lỗi vì sự bất tiện này.
              </p>
            </CardContent>
            <CardFooter className="flex justify-end pt-0">
              <Button variant="ghost" size="sm" className="h-8">
                <Check className="h-4 w-4 mr-1" />
                Đánh dấu đã đọc
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-l-4 border-gray-300">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">Chỉ số nước mới đã được cập nhật</CardTitle>
                  <CardDescription>Chỉ số nước tháng 3/2025 đã được ghi nhận</CardDescription>
                </div>
                <div className="text-xs text-muted-foreground">5 ngày trước</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Chỉ số nước của hộ gia đình Nguyễn Văn A đã được cập nhật cho tháng 3/2025. Chỉ số mới: 1250, chỉ số cũ:
                1220, lượng nước sử dụng: 30m³.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button variant="link" className="h-auto p-0">
                Xem chi tiết
              </Button>
              <Button variant="ghost" size="sm" className="h-8">
                <Check className="h-4 w-4 mr-1" />
                Đánh dấu đã đọc
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="unread" className="space-y-4 mt-4">
          {/* Nội dung tương tự nhưng chỉ hiển thị thông báo chưa đọc */}
        </TabsContent>
        <TabsContent value="bills" className="space-y-4 mt-4">
          {/* Nội dung tương tự nhưng chỉ hiển thị thông báo về hóa đơn */}
        </TabsContent>
        <TabsContent value="system" className="space-y-4 mt-4">
          {/* Nội dung tương tự nhưng chỉ hiển thị thông báo hệ thống */}
        </TabsContent>
      </Tabs>
    </div>
  )
}


export default UserNotificationsPage;

//

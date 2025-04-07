import { FileQuestion, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const UserSupportPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Hỗ trợ</h1>
      </div>

      <Tabs defaultValue="new" className="w-full">
        <TabsList>
          <TabsTrigger value="new">Gửi yêu cầu mới</TabsTrigger>
          <TabsTrigger value="history">Lịch sử yêu cầu</TabsTrigger>
          <TabsTrigger value="faq">Câu hỏi thường gặp</TabsTrigger>
        </TabsList>
        <TabsContent value="new" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Gửi yêu cầu hỗ trợ</CardTitle>
              <CardDescription>Vui lòng điền đầy đủ thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="household" className="text-sm font-medium">
                      Hộ gia đình
                    </label>
                    <Select defaultValue="HGD001">
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn hộ gia đình" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="HGD001">Hộ gia đình Nguyễn Văn A (HGD001)</SelectItem>
                        <SelectItem value="HGD002">Hộ gia đình Trần Thị B (HGD002)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-medium">
                      Loại yêu cầu
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn loại yêu cầu" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bill">Vấn đề về hóa đơn</SelectItem>
                        <SelectItem value="meter">Vấn đề về đồng hồ nước</SelectItem>
                        <SelectItem value="leak">Báo cáo rò rỉ nước</SelectItem>
                        <SelectItem value="quality">Vấn đề về chất lượng nước</SelectItem>
                        <SelectItem value="other">Vấn đề khác</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Tiêu đề
                  </label>
                  <Input id="subject" placeholder="Nhập tiêu đề yêu cầu" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Mô tả chi tiết
                  </label>
                  <Textarea id="description" placeholder="Mô tả chi tiết vấn đề bạn đang gặp phải..." rows={5} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="attachment" className="text-sm font-medium">
                    Đính kèm tệp (nếu có)
                  </label>
                  <Input id="attachment" type="file" />
                  <p className="text-xs text-muted-foreground">
                    Hỗ trợ các định dạng: JPG, PNG, PDF. Kích thước tối đa: 5MB.
                  </p>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Send className="mr-2 h-4 w-4" />
                Gửi yêu cầu
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Lịch sử yêu cầu hỗ trợ</CardTitle>
              <CardDescription>Danh sách các yêu cầu hỗ trợ bạn đã gửi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Đồng hồ nước bị hỏng</h3>
                      <p className="text-sm text-muted-foreground">Hộ gia đình Nguyễn Văn A (HGD001)</p>
                      <p className="text-sm text-muted-foreground">Gửi lúc: 01/04/2025</p>
                    </div>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                      Đang xử lý
                    </span>
                  </div>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Hóa đơn sai thông tin</h3>
                      <p className="text-sm text-muted-foreground">Hộ gia đình Nguyễn Văn A (HGD001)</p>
                      <p className="text-sm text-muted-foreground">Gửi lúc: 15/03/2025</p>
                    </div>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                      Đã xử lý
                    </span>
                  </div>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Yêu cầu thay đổi thông tin liên hệ</h3>
                      <p className="text-sm text-muted-foreground">Hộ gia đình Nguyễn Văn A (HGD001)</p>
                      <p className="text-sm text-muted-foreground">Gửi lúc: 10/02/2025</p>
                    </div>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                      Đã xử lý
                    </span>
                  </div>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="faq" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Câu hỏi thường gặp</CardTitle>
              <CardDescription>Các câu hỏi và giải đáp thường gặp về dịch vụ nước</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center">
                    <FileQuestion className="mr-2 h-5 w-5" />
                    Làm thế nào để đọc chỉ số nước?
                  </h3>
                  <p className="text-sm">
                    Chỉ số nước được ghi trên đồng hồ nước của bạn. Bạn chỉ cần đọc các số hiển thị trên đồng hồ từ trái
                    sang phải.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center">
                    <FileQuestion className="mr-2 h-5 w-5" />
                    Khi nào tôi nhận được hóa đơn?
                  </h3>
                  <p className="text-sm">
                    Hóa đơn nước được phát hành vào ngày 5 hàng tháng và có thời hạn thanh toán là ngày 15 hàng tháng.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center">
                    <FileQuestion className="mr-2 h-5 w-5" />
                    Làm thế nào để báo cáo sự cố rò rỉ nước?
                  </h3>
                  <p className="text-sm">
                    Bạn có thể báo cáo sự cố rò rỉ nước bằng cách gửi yêu cầu hỗ trợ qua hệ thống hoặc gọi đến số
                    hotline 0123 456 789.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center">
                    <FileQuestion className="mr-2 h-5 w-5" />
                    Các phương thức thanh toán hóa đơn?
                  </h3>
                  <p className="text-sm">
                    Bạn có thể thanh toán hóa đơn qua các phương thức: thanh toán trực tuyến, chuyển khoản ngân hàng,
                    thanh toán tại quầy hoặc qua các ứng dụng ngân hàng.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center">
                    <FileQuestion className="mr-2 h-5 w-5" />
                    Làm thế nào để thay đổi thông tin cá nhân?
                  </h3>
                  <p className="text-sm">
                    Để thay đổi thông tin cá nhân, bạn có thể gửi yêu cầu hỗ trợ hoặc liên hệ trực tiếp với chúng tôi
                    qua số điện thoại 0123 456 789.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default UserSupportPage;


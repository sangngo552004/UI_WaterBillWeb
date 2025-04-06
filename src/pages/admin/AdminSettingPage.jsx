import { Bell, Globe, Mail, Shield, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const  AdminSettingPage = ()  => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Cài đặt hệ thống</h1>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">Chung</TabsTrigger>
          <TabsTrigger value="company">Thông tin công ty</TabsTrigger>
          <TabsTrigger value="notifications">Thông báo</TabsTrigger>
          <TabsTrigger value="security">Bảo mật</TabsTrigger>
          <TabsTrigger value="billing">Thanh toán</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                Cài đặt chung
              </CardTitle>
              <CardDescription>Cài đặt chung cho hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Ngôn ngữ</Label>
                <Select defaultValue="vi">
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn ngôn ngữ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vi">Tiếng Việt</SelectItem>
                    <SelectItem value="en">Tiếng Anh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Múi giờ</Label>
                <Select defaultValue="asia_ho_chi_minh">
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn múi giờ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asia_ho_chi_minh">Asia/Ho_Chi_Minh (GMT+7)</SelectItem>
                    <SelectItem value="asia_bangkok">Asia/Bangkok (GMT+7)</SelectItem>
                    <SelectItem value="asia_singapore">Asia/Singapore (GMT+8)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date_format">Định dạng ngày</Label>
                <Select defaultValue="dd_mm_yyyy">
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn định dạng ngày" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dd_mm_yyyy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="mm_dd_yyyy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="yyyy_mm_dd">YYYY/MM/DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark_mode">Chế độ tối</Label>
                  <p className="text-sm text-muted-foreground">Bật chế độ tối cho giao diện</p>
                </div>
                <Switch id="dark_mode" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Lưu thay đổi</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="company" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Thông tin công ty
              </CardTitle>
              <CardDescription>Cập nhật thông tin công ty của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company_name">Tên công ty</Label>
                <Input id="company_name" defaultValue="Công ty Cấp nước" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company_address">Địa chỉ</Label>
                <Input id="company_address" defaultValue="123 Đường Nước, Quận 1, TP.HCM" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company_phone">Số điện thoại</Label>
                <Input id="company_phone" defaultValue="0123 456 789" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company_email">Email</Label>
                <Input id="company_email" defaultValue="info@waterbill.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company_tax">Mã số thuế</Label>
                <Input id="company_tax" defaultValue="0123456789" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company_website">Website</Label>
                <Input id="company_website" defaultValue="https://waterbill.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company_description">Mô tả</Label>
                <Textarea
                  id="company_description"
                  defaultValue="Công ty cung cấp dịch vụ nước sạch và quản lý hóa đơn nước hiệu quả cho khách hàng."
                  rows={3}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Lưu thay đổi</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Cài đặt thông báo
              </CardTitle>
              <CardDescription>Quản lý cách thức gửi thông báo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Thông báo qua email</Label>
                  <p className="text-sm text-muted-foreground">Gửi thông báo qua email cho khách hàng</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Thông báo qua SMS</Label>
                  <p className="text-sm text-muted-foreground">Gửi thông báo qua SMS cho khách hàng</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Thông báo hóa đơn mới</Label>
                  <p className="text-sm text-muted-foreground">Gửi thông báo khi có hóa đơn mới</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Thông báo nhắc nhở thanh toán</Label>
                  <p className="text-sm text-muted-foreground">Gửi thông báo nhắc nhở thanh toán trước hạn</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Thông báo quá hạn thanh toán</Label>
                  <p className="text-sm text-muted-foreground">Gửi thông báo khi hóa đơn quá hạn thanh toán</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notification_template">Mẫu email thông báo</Label>
                <Textarea
                  id="notification_template"
                  defaultValue="Kính gửi Quý khách, Hóa đơn tiền nước tháng [MONTH] của Quý khách đã được phát hành với số tiền [AMOUNT] VNĐ. Vui lòng thanh toán trước ngày [DUE_DATE]. Xin cảm ơn!"
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Lưu thay đổi</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Cài đặt bảo mật
              </CardTitle>
              <CardDescription>Quản lý cài đặt bảo mật cho hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Xác thực hai yếu tố</Label>
                  <p className="text-sm text-muted-foreground">Yêu cầu xác thực hai yếu tố khi đăng nhập</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Tự động đăng xuất</Label>
                  <p className="text-sm text-muted-foreground">
                    Tự động đăng xuất sau một khoảng thời gian không hoạt động
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Giới hạn đăng nhập sai</Label>
                  <p className="text-sm text-muted-foreground">Khóa tài khoản sau nhiều lần đăng nhập sai</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password_policy">Chính sách mật khẩu</Label>
                <Select defaultValue="strong">
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn chính sách mật khẩu" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Cơ bản (ít nhất 8 ký tự)</SelectItem>
                    <SelectItem value="medium">Trung bình (ít nhất 8 ký tự, bao gồm chữ và số)</SelectItem>
                    <SelectItem value="strong">
                      Mạnh (ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="session_timeout">Thời gian hết phiên (phút)</Label>
                <Input id="session_timeout" type="number" defaultValue="30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login_attempts">Số lần đăng nhập sai tối đa</Label>
                <Input id="login_attempts" type="number" defaultValue="5" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Lưu thay đổi</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Cài đặt thanh toán
              </CardTitle>
              <CardDescription>Quản lý cài đặt thanh toán và hóa đơn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="billing_cycle">Chu kỳ thanh toán</Label>
                <Select defaultValue="monthly">
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn chu kỳ thanh toán" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Hàng tháng</SelectItem>
                    <SelectItem value="quarterly">Hàng quý</SelectItem>
                    <SelectItem value="yearly">Hàng năm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="payment_due_days">Số ngày thanh toán (từ ngày phát hành)</Label>
                <Input id="payment_due_days" type="number" defaultValue="10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="late_fee_percentage">Phí trễ hạn (%)</Label>
                <Input id="late_fee_percentage" type="number" defaultValue="2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vat_percentage">Thuế VAT (%)</Label>
                <Input id="vat_percentage" type="number" defaultValue="10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service_fee">Phí dịch vụ (VNĐ)</Label>
                <Input id="service_fee" type="number" defaultValue="20000" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Tự động tạo hóa đơn</Label>
                  <p className="text-sm text-muted-foreground">Tự động tạo hóa đơn vào đầu tháng</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Cho phép thanh toán trực tuyến</Label>
                  <p className="text-sm text-muted-foreground">Cho phép khách hàng thanh toán trực tuyến</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Lưu thay đổi</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default AdminSettingPage;


import {Link, useParams} from "react-router-dom";
import { ArrowLeft, Edit, FileText, Mail, MapPin, Phone, Plus, User, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserHouseholdDetailPage = () => {
  const params = useParams ();
  console.log(params);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/user/ho-gia-dinh">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Chi tiết hộ gia đình</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Chỉnh sửa
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin hộ gia đình</CardTitle>
              <CardDescription>Mã hộ: {params.id}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Badge>Chủ hộ</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Chủ hộ</p>
                    <p>Nguyễn Văn A</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Địa chỉ</p>
                    <p>123 Đường ABC, Quận 1, TP.HCM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Số điện thoại</p>
                    <p>0901234567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p>nguyenvana@example.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Mã đồng hồ nước</p>
                    <p>DH12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Số thành viên</p>
                    <p>4 người</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Thành viên</CardTitle>
              <CardDescription>Danh sách thành viên trong hộ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Avatar" />
                    <AvatarFallback>NA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Nguyễn Văn A</p>
                    <p className="text-sm text-muted-foreground">Chủ hộ</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Avatar" />
                    <AvatarFallback>NB</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Nguyễn Thị B</p>
                    <p className="text-sm text-muted-foreground">Vợ</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Avatar" />
                    <AvatarFallback>NC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Nguyễn Văn C</p>
                    <p className="text-sm text-muted-foreground">Con trai</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" alt="Avatar" />
                    <AvatarFallback>ND</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Nguyễn Thị D</p>
                    <p className="text-sm text-muted-foreground">Con gái</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Thêm thành viên
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="notifications" className="w-full">
            <TabsList>
              <TabsTrigger value="notifications">Thông báo</TabsTrigger>
              <TabsTrigger value="bills">Hóa đơn</TabsTrigger>
              <TabsTrigger value="water-usage">Lượng nước sử dụng</TabsTrigger>
            </TabsList>
            <TabsContent value="notifications" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Thông báo</CardTitle>
                  <CardDescription>Các thông báo dành cho hộ gia đình này</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
                        <h3 className="font-medium">Chỉ số nước mới đã được cập nhật</h3>
                        <p className="text-sm text-muted-foreground">
                          Chỉ số nước tháng 4/2025 đã được ghi nhận: 1250 (tăng 30 m³)
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">3 ngày trước</span>
                    </div>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4 py-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">Thông báo bảo trì đường ống nước</h3>
                        <p className="text-sm text-muted-foreground">
                          Sẽ có bảo trì đường ống nước trong khu vực của bạn vào ngày 10/04/2025 từ 8:00 - 12:00
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">5 ngày trước</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Xem tất cả thông báo
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="bills" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Hóa đơn gần đây</CardTitle>
                  <CardDescription>Danh sách hóa đơn của hộ gia đình</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Hóa đơn tháng 4/2025</h3>
                          <p className="text-sm text-muted-foreground">Mã hóa đơn: HD12345</p>
                          <p className="text-sm text-muted-foreground">Số tiền: 320,000 VNĐ</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300 mb-2">
                            Chưa thanh toán
                          </span>
                          <Button size="sm" asChild>
                            <Link href="/user/hoa-don/HD12345">Xem chi tiết</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Hóa đơn tháng 3/2025</h3>
                          <p className="text-sm text-muted-foreground">Mã hóa đơn: HD12343</p>
                          <p className="text-sm text-muted-foreground">Số tiền: 285,000 VNĐ</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300 mb-2">
                            Đã thanh toán
                          </span>
                          <Button size="sm" variant="outline" asChild>
                            <Link href="/user/hoa-don/HD12343">Xem chi tiết</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Hóa đơn tháng 2/2025</h3>
                          <p className="text-sm text-muted-foreground">Mã hóa đơn: HD12342</p>
                          <p className="text-sm text-muted-foreground">Số tiền: 310,000 VNĐ</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300 mb-2">
                            Đã thanh toán
                          </span>
                          <Button size="sm" variant="outline" asChild>
                            <Link href="/user/hoa-don/HD12342">Xem chi tiết</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/user/hoa-don">Xem tất cả hóa đơn</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="water-usage" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Lượng nước sử dụng</CardTitle>
                  <CardDescription>Biểu đồ lượng nước sử dụng trong 6 tháng gần nhất</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-end justify-between gap-2">
                    <div className="relative flex flex-col items-center">
                      <div className="h-[120px] w-12 bg-blue-200 rounded-t-md"></div>
                      <span className="mt-2 text-xs">T11/24</span>
                      <span className="text-xs font-medium">25 m³</span>
                    </div>
                    <div className="relative flex flex-col items-center">
                      <div className="h-[150px] w-12 bg-blue-300 rounded-t-md"></div>
                      <span className="mt-2 text-xs">T12/24</span>
                      <span className="text-xs font-medium">32 m³</span>
                    </div>
                    <div className="relative flex flex-col items-center">
                      <div className="h-[100px] w-12 bg-blue-200 rounded-t-md"></div>
                      <span className="mt-2 text-xs">T1/25</span>
                      <span className="text-xs font-medium">22 m³</span>
                    </div>
                    <div className="relative flex flex-col items-center">
                      <div className="h-[130px] w-12 bg-blue-300 rounded-t-md"></div>
                      <span className="mt-2 text-xs">T2/25</span>
                      <span className="text-xs font-medium">28 m³</span>
                    </div>
                    <div className="relative flex flex-col items-center">
                      <div className="h-[140px] w-12 bg-blue-400 rounded-t-md"></div>
                      <span className="mt-2 text-xs">T3/25</span>
                      <span className="text-xs font-medium">30 m³</span>
                    </div>
                    <div className="relative flex flex-col items-center">
                      <div className="h-[140px] w-12 bg-blue-500 rounded-t-md"></div>
                      <span className="mt-2 text-xs">T4/25</span>
                      <span className="text-xs font-medium">30 m³</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Lượng nước trung bình:</span>
                      <span className="font-medium">27.8 m³/tháng</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tổng lượng nước 6 tháng qua:</span>
                      <span className="font-medium">167 m³</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}


export default UserHouseholdDetailPage;
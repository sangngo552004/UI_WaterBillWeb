import { Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const  UserHouseholdPage = () =>  {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Hộ gia đình</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Xin tham gia hộ gia đình
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Tìm kiếm hộ gia đình..." className="pl-8" />
        </div>
        <Button variant="outline">Lọc</Button>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList>
          <TabsTrigger value="active">Đang tham gia</TabsTrigger>
          <TabsTrigger value="pending">Đang chờ duyệt</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Hộ gia đình Nguyễn Văn A</CardTitle>
                  <CardDescription>Mã hộ: HGD001</CardDescription>
                </div>
                <Badge>Chủ hộ</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Địa chỉ</p>
                    <p>123 Đường ABC, Quận 1, TP.HCM</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Số thành viên</p>
                    <p>4 người</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Đồng hồ nước</p>
                    <p>DH12345</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Loại khách hàng</p>
                    <p>Hộ gia đình</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Xem chi tiết</Button>
              <Button variant="outline">Quản lý thành viên</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Hộ gia đình Trần Thị B</CardTitle>
                  <CardDescription>Mã hộ: HGD002</CardDescription>
                </div>
                <Badge variant="outline">Thành viên</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Địa chỉ</p>
                    <p>456 Đường XYZ, Quận 2, TP.HCM</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Số thành viên</p>
                    <p>3 người</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Đồng hồ nước</p>
                    <p>DH67890</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Loại khách hàng</p>
                    <p>Hộ gia đình</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Xem chi tiết</Button>
              <Button variant="outline">Rời khỏi hộ</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Hộ gia đình Lê Văn C</CardTitle>
                  <CardDescription>Mã hộ: HGD003</CardDescription>
                </div>
                <Badge variant="secondary">Đang chờ duyệt</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Địa chỉ</p>
                    <p>789 Đường DEF, Quận 3, TP.HCM</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Số thành viên</p>
                    <p>5 người</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Ngày yêu cầu</p>
                    <p>01/04/2025</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Trạng thái</p>
                    <p>Chờ chủ hộ phê duyệt</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Xem chi tiết</Button>
              <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                Hủy yêu cầu
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default UserHouseholdPage;
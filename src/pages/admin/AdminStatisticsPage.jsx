import { Download, LineChart, PieChart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const  AdminStatisticsPage = ()  =>  {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Thống kê & Báo cáo</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Xuất báo cáo
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Select defaultValue="month">
            <SelectTrigger>
              <SelectValue placeholder="Chọn thời gian" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Tháng này</SelectItem>
              <SelectItem value="quarter">Quý này</SelectItem>
              <SelectItem value="year">Năm nay</SelectItem>
              <SelectItem value="custom">Tùy chỉnh</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Chọn khu vực" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả khu vực</SelectItem>
              <SelectItem value="district1">Quận 1</SelectItem>
              <SelectItem value="district2">Quận 2</SelectItem>
              <SelectItem value="district3">Quận 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Chọn loại khách hàng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả loại khách hàng</SelectItem>
              <SelectItem value="household">Hộ gia đình</SelectItem>
              <SelectItem value="business">Doanh nghiệp</SelectItem>
              <SelectItem value="government">Cơ quan nhà nước</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="revenue" className="w-full">
        <TabsList>
          <TabsTrigger value="revenue">Doanh thu</TabsTrigger>
          <TabsTrigger value="consumption">Lượng nước tiêu thụ</TabsTrigger>
          <TabsTrigger value="customers">Khách hàng</TabsTrigger>
          <TabsTrigger value="bills">Hóa đơn</TabsTrigger>
        </TabsList>
        <TabsContent value="revenue" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tổng doanh thu</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
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
                <CardTitle className="text-sm font-medium">Doanh thu hộ gia đình</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">229,125,000 VNĐ</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+7.5%</span> so với tháng trước
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Doanh thu doanh nghiệp</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">88,125,000 VNĐ</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+9.2%</span> so với tháng trước
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Doanh thu cơ quan</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">35,250,000 VNĐ</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+6.8%</span> so với tháng trước
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LineChart className="mr-2 h-5 w-5" />
                  Biểu đồ doanh thu theo tháng
                </CardTitle>
                <CardDescription>Doanh thu 6 tháng gần nhất</CardDescription>
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

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="mr-2 h-5 w-5" />
                  Phân bổ doanh thu theo loại khách hàng
                </CardTitle>
                <CardDescription>Tỷ lệ doanh thu theo loại khách hàng trong tháng 4/2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <div className="relative h-64 w-64 rounded-full border-8 border-blue-500 flex items-center justify-center">
                    <div className="absolute inset-0 border-8 border-transparent border-t-green-500 border-r-green-500 rounded-full transform rotate-45"></div>
                    <div className="absolute inset-0 border-8 border-transparent border-b-yellow-500 rounded-full transform rotate-[200deg]"></div>
                    <div className="h-48 w-48 rounded-full bg-white flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-bold">352.5tr</div>
                        <div className="text-sm text-muted-foreground">Tổng doanh thu</div>
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
        </TabsContent>
        <TabsContent value="consumption" className="mt-4">
          {/* Nội dung tương tự nhưng hiển thị thống kê về lượng nước tiêu thụ */}
        </TabsContent>
        <TabsContent value="customers" className="mt-4">
          {/* Nội dung tương tự nhưng hiển thị thống kê về khách hàng */}
        </TabsContent>
        <TabsContent value="bills" className="mt-4">
          {/* Nội dung tương tự nhưng hiển thị thống kê về hóa đơn */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AdminStatisticsPage;
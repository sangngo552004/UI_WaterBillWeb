import { Plus, Search, Filter, MoreHorizontal, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const  AdminWaterMeterPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Quản lý đồng hồ nước</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <MapPin className="mr-2 h-4 w-4" />
            Xem bản đồ
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Thêm đồng hồ mới
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Tìm kiếm theo mã đồng hồ, địa chỉ..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Lọc
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">Tất cả</TabsTrigger>
              <TabsTrigger value="active">Đang hoạt động</TabsTrigger>
              <TabsTrigger value="maintenance">Bảo trì</TabsTrigger>
              <TabsTrigger value="inactive">Ngưng hoạt động</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã đồng hồ</TableHead>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Địa chỉ</TableHead>
                    <TableHead>Loại đồng hồ</TableHead>
                    <TableHead>Ngày lắp đặt</TableHead>
                    <TableHead>Chỉ số hiện tại</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">DH12345</TableCell>
                    <TableCell>Nguyễn Văn A</TableCell>
                    <TableCell>123 Đường ABC, Quận 1, TP.HCM</TableCell>
                    <TableCell>Cơ khí</TableCell>
                    <TableCell>01/01/2024</TableCell>
                    <TableCell>1250</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                        Đang hoạt động
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                          <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                          <DropdownMenuItem>Lịch sử chỉ số</DropdownMenuItem>
                          <DropdownMenuItem>Đánh dấu bảo trì</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Ngưng hoạt động</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DH67890</TableCell>
                    <TableCell>Trần Thị B</TableCell>
                    <TableCell>456 Đường XYZ, Quận 2, TP.HCM</TableCell>
                    <TableCell>Điện tử</TableCell>
                    <TableCell>15/02/2024</TableCell>
                    <TableCell>1005</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                        Đang hoạt động
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                          <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                          <DropdownMenuItem>Lịch sử chỉ số</DropdownMenuItem>
                          <DropdownMenuItem>Đánh dấu bảo trì</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Ngưng hoạt động</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DH24680</TableCell>
                    <TableCell>Lê Văn C</TableCell>
                    <TableCell>789 Đường DEF, Quận 3, TP.HCM</TableCell>
                    <TableCell>Điện tử</TableCell>
                    <TableCell>10/03/2024</TableCell>
                    <TableCell>1450</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                        Đang bảo trì
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                          <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                          <DropdownMenuItem>Lịch sử chỉ số</DropdownMenuItem>
                          <DropdownMenuItem>Đánh dấu hoạt động</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Ngưng hoạt động</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DH13579</TableCell>
                    <TableCell>Phạm Thị D</TableCell>
                    <TableCell>101 Đường GHI, Quận 4, TP.HCM</TableCell>
                    <TableCell>Cơ khí</TableCell>
                    <TableCell>05/01/2024</TableCell>
                    <TableCell>980</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-red-50 text-red-600 border-red-300">
                        Ngưng hoạt động
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                          <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                          <DropdownMenuItem>Lịch sử chỉ số</DropdownMenuItem>
                          <DropdownMenuItem>Đánh dấu hoạt động</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button variant="outline" size="sm">
                  Trước
                </Button>
                <Button variant="outline" size="sm">
                  Sau
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="active" className="mt-4">
              {/* Nội dung tương tự nhưng chỉ hiển thị đồng hồ đang hoạt động */}
            </TabsContent>
            <TabsContent value="maintenance" className="mt-4">
              {/* Nội dung tương tự nhưng chỉ hiển thị đồng hồ đang bảo trì */}
            </TabsContent>
            <TabsContent value="inactive" className="mt-4">
              {/* Nội dung tương tự nhưng chỉ hiển thị đồng hồ ngưng hoạt động */}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminWaterMeterPage;



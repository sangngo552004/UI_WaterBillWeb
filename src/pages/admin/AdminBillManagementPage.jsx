import { Plus, Search, Filter, MoreHorizontal, Download } from "lucide-react"

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

const AdminBillManagementPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Quản lý hóa đơn</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tạo hóa đơn mới
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Tìm kiếm theo mã hóa đơn, tên khách hàng..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Lọc
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">Tất cả</TabsTrigger>
              <TabsTrigger value="unpaid">Chưa thanh toán</TabsTrigger>
              <TabsTrigger value="paid">Đã thanh toán</TabsTrigger>
              <TabsTrigger value="overdue">Quá hạn</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã hóa đơn</TableHead>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Mã hộ</TableHead>
                    <TableHead>Ngày tạo</TableHead>
                    <TableHead>Hạn thanh toán</TableHead>
                    <TableHead>Số tiền</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">HD12345</TableCell>
                    <TableCell>Nguyễn Văn A</TableCell>
                    <TableCell>HGD001</TableCell>
                    <TableCell>05/04/2025</TableCell>
                    <TableCell>15/04/2025</TableCell>
                    <TableCell>320,000 VNĐ</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                        Chưa thanh toán
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
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Xuất PDF
                          </DropdownMenuItem>
                          <DropdownMenuItem>Đánh dấu đã thanh toán</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Hủy hóa đơn</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">HD12344</TableCell>
                    <TableCell>Trần Thị B</TableCell>
                    <TableCell>HGD002</TableCell>
                    <TableCell>05/04/2025</TableCell>
                    <TableCell>15/04/2025</TableCell>
                    <TableCell>285,000 VNĐ</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                        Chưa thanh toán
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
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Xuất PDF
                          </DropdownMenuItem>
                          <DropdownMenuItem>Đánh dấu đã thanh toán</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Hủy hóa đơn</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">HD12343</TableCell>
                    <TableCell>Lê Văn C</TableCell>
                    <TableCell>HGD003</TableCell>
                    <TableCell>04/04/2025</TableCell>
                    <TableCell>14/04/2025</TableCell>
                    <TableCell>410,000 VNĐ</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                        Đã thanh toán
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
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Xuất PDF
                          </DropdownMenuItem>
                          <DropdownMenuItem>Gửi email</DropdownMenuItem>
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
            <TabsContent value="unpaid" className="mt-4">
              {/* Nội dung tương tự nhưng chỉ hiển thị hóa đơn chưa thanh toán */}
            </TabsContent>
            <TabsContent value="paid" className="mt-4">
              {/* Nội dung tương tự nhưng chỉ hiển thị hóa đơn đã thanh toán */}
            </TabsContent>
            <TabsContent value="overdue" className="mt-4">
              {/* Nội dung tương tự nhưng chỉ hiển thị hóa đơn quá hạn */}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}


export default AdminBillManagementPage;

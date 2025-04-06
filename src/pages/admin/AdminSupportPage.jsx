import { Search, Filter, MoreHorizontal, MessageSquare } from "lucide-react"

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

const  AdminSupportPage = () =>  {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Quản lý yêu cầu hỗ trợ</h1>
        <Button variant="outline">
          <MessageSquare className="mr-2 h-4 w-4" />
          Gửi thông báo
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Tìm kiếm theo tiêu đề, khách hàng..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Lọc
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">Tất cả</TabsTrigger>
              <TabsTrigger value="new">Mới</TabsTrigger>
              <TabsTrigger value="processing">Đang xử lý</TabsTrigger>
              <TabsTrigger value="resolved">Đã xử lý</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã yêu cầu</TableHead>
                    <TableHead>Tiêu đề</TableHead>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Loại yêu cầu</TableHead>
                    <TableHead>Ngày gửi</TableHead>
                    <TableHead>Nhân viên xử lý</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">YC12345</TableCell>
                    <TableCell>Đồng hồ nước bị hỏng</TableCell>
                    <TableCell>Nguyễn Văn A</TableCell>
                    <TableCell>Vấn đề về đồng hồ nước</TableCell>
                    <TableCell>05/04/2025</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-red-50 text-red-600 border-red-300">
                        Mới
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
                          <DropdownMenuItem>Phân công nhân viên</DropdownMenuItem>
                          <DropdownMenuItem>Đánh dấu đang xử lý</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Từ chối yêu cầu</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">YC12344</TableCell>
                    <TableCell>Rò rỉ nước</TableCell>
                    <TableCell>Trần Thị B</TableCell>
                    <TableCell>Báo cáo rò rỉ nước</TableCell>
                    <TableCell>04/04/2025</TableCell>
                    <TableCell>Lê Thị Ghi</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                        Đang xử lý
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
                          <DropdownMenuItem>Cập nhật trạng thái</DropdownMenuItem>
                          <DropdownMenuItem>Đánh dấu đã xử lý</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">YC12343</TableCell>
                    <TableCell>Hóa đơn sai thông tin</TableCell>
                    <TableCell>Lê Văn C</TableCell>
                    <TableCell>Vấn đề về hóa đơn</TableCell>
                    <TableCell>03/04/2025</TableCell>
                    <TableCell>Trần Văn Nhân</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                        Đang xử lý
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
                          <DropdownMenuItem>Cập nhật trạng thái</DropdownMenuItem>
                          <DropdownMenuItem>Đánh dấu đã xử lý</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">YC12342</TableCell>
                    <TableCell>Thay đổi thông tin liên hệ</TableCell>
                    <TableCell>Phạm Thị D</TableCell>
                    <TableCell>Vấn đề khác</TableCell>
                    <TableCell>02/04/2025</TableCell>
                    <TableCell>Trần Văn Nhân</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                        Đã xử lý
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
                          <DropdownMenuItem>Mở lại yêu cầu</DropdownMenuItem>
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
            <TabsContent value="new" className="mt-4">
              {/* Nội dung tương tự nhưng chỉ hiển thị yêu cầu mới */}
            </TabsContent>
            <TabsContent value="processing" className="mt-4">
              {/* Nội dung tương tự nhưng chỉ hiển thị yêu cầu đang xử lý */}
            </TabsContent>
            <TabsContent value="resolved" className="mt-4">
              {/* Nội dung tương tự nhưng chỉ hiển thị yêu cầu đã xử lý */}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminSupportPage;


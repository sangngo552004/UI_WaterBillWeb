import {Link } from "react-router-dom";
import { Search, Filter, Download, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const  UserBillsPage =() => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Hóa đơn</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Lọc
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Tìm kiếm theo mã hóa đơn, ngày..." className="pl-8" />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">Tất cả</TabsTrigger>
              <TabsTrigger value="unpaid">Chưa thanh toán</TabsTrigger>
              <TabsTrigger value="paid">Đã thanh toán</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã hóa đơn</TableHead>
                    <TableHead>Hộ gia đình</TableHead>
                    <TableHead>Kỳ hóa đơn</TableHead>
                    <TableHead>Ngày phát hành</TableHead>
                    <TableHead>Hạn thanh toán</TableHead>
                    <TableHead>Số tiền</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">HD12345</TableCell>
                    <TableCell>Hộ gia đình Nguyễn Văn A</TableCell>
                    <TableCell>Tháng 4/2025</TableCell>
                    <TableCell>05/04/2025</TableCell>
                    <TableCell>15/04/2025</TableCell>
                    <TableCell>320,000 VNĐ</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                        Chưa thanh toán
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href="/user/hoa-don/HD12345">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">HD12344</TableCell>
                    <TableCell>Hộ gia đình Trần Thị B</TableCell>
                    <TableCell>Tháng 4/2025</TableCell>
                    <TableCell>05/04/2025</TableCell>
                    <TableCell>15/04/2025</TableCell>
                    <TableCell>285,000 VNĐ</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                        Chưa thanh toán
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href="/user/hoa-don/HD12344">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">HD12343</TableCell>
                    <TableCell>Hộ gia đình Nguyễn Văn A</TableCell>
                    <TableCell>Tháng 3/2025</TableCell>
                    <TableCell>05/03/2025</TableCell>
                    <TableCell>15/03/2025</TableCell>
                    <TableCell>285,000 VNĐ</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                        Đã thanh toán
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href="/user/hoa-don/HD12343">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">HD12342</TableCell>
                    <TableCell>Hộ gia đình Nguyễn Văn A</TableCell>
                    <TableCell>Tháng 2/2025</TableCell>
                    <TableCell>05/02/2025</TableCell>
                    <TableCell>15/02/2025</TableCell>
                    <TableCell>310,000 VNĐ</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                        Đã thanh toán
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href="/user/hoa-don/HD12342">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
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
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}


export default UserBillsPage;

//
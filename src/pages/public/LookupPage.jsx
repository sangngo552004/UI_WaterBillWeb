import {Link} from "react-router-dom";
import { Search, ArrowRight, FileText, CreditCard, Building, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator";
import SectionHeader from "@/components/common/SectionHeader";



const  LookupPage = () => {
  const data = {
    
  }
  return (

        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Tra cứu" description = "" />

          <Tabs defaultValue="bill" className="w-full ">
            <TabsList className="grid grid-cols-1 w-max mx-auto mb-2">
              <TabsTrigger value="bill">Tra cứu theo mã hóa đơn</TabsTrigger>
            </TabsList>
            <TabsContent value="bill">
              <Card>
                <CardHeader>
                  <CardTitle>Tra cứu theo mã hóa đơn</CardTitle>
                  <CardDescription>Nhập mã hóa đơn để tra cứu thông tin và thanh toán</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="text" placeholder="Nhập mã hóa đơn (VD: HD12345)" className="pl-8" />
                    </div>
                    <Button type="submit">
                      <Search className="mr-2 h-4 w-4" />
                      Tra cứu
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Kết quả tra cứu - Hóa đơn chưa thanh toán */}
              <div className="mt-8">
                <Card className="border-yellow-200">
                  <CardHeader className="bg-yellow-50 border-b border-yellow-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          <FileText className="mr-2 h-5 w-5 text-yellow-600" />
                          Hóa đơn #HD12345
                        </CardTitle>
                        <CardDescription>Kỳ hóa đơn: Tháng 4/2025</CardDescription>
                      </div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                        Chưa thanh toán
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Khách hàng</p>
                        <p>Nguyễn Văn A</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Mã khách hàng</p>
                        <p>KH001</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Địa chỉ</p>
                        <p>123 Đường ABC, Quận 1, TP.HCM</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Mã đồng hồ nước</p>
                        <p>DH12345</p>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chỉ số cũ</span>
                        <span>1220</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chỉ số mới</span>
                        <span>1250</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lượng nước tiêu thụ</span>
                        <span>30 m³</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tiền nước</span>
                        <span>240,000 VNĐ</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Phí bảo vệ môi trường</span>
                        <span>24,000 VNĐ</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Phí dịch vụ</span>
                        <span>20,000 VNĐ</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Thuế VAT (10%)</span>
                        <span>36,000 VNĐ</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-bold">
                        <span>Tổng cộng</span>
                        <span>320,000 VNĐ</span>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 flex items-start space-x-3 mb-4">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-yellow-800">Hóa đơn chưa thanh toán</h3>
                        <p className="text-sm text-yellow-700">
                          Vui lòng thanh toán trước ngày 15/04/2025 để tránh bị phạt trễ hạn.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Phương thức thanh toán</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="border-blue-100 hover:border-blue-300 transition-colors cursor-pointer">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-center">
                              <CreditCard className="mr-2 h-4 w-4 text-blue-500" />
                              Thanh toán trực tuyến
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Thanh toán nhanh chóng qua thẻ ATM, Visa, MasterCard hoặc ví điện tử.
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full">
                              Thanh toán ngay
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardFooter>
                        </Card>

                        <Card className="border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-center">
                              <Building className="mr-2 h-4 w-4 text-gray-500" />
                              Thanh toán tại ngân hàng
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Chuyển khoản qua ngân hàng hoặc thanh toán tại quầy giao dịch.
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">
                              Xem hướng dẫn
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Kết quả tra cứu - Hóa đơn đã thanh toán (ẩn mặc định, hiển thị khi tra cứu) */}
              <div className="mt-8">
                <Card className="border-green-200">
                  <CardHeader className="bg-green-50 border-b border-green-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          <FileText className="mr-2 h-5 w-5 text-green-600" />
                          Hóa đơn #HD12343
                        </CardTitle>
                        <CardDescription>Kỳ hóa đơn: Tháng 3/2025</CardDescription>
                      </div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-300">
                        Đã thanh toán
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Khách hàng</p>
                        <p>Nguyễn Văn A</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Mã khách hàng</p>
                        <p>KH001</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Địa chỉ</p>
                        <p>123 Đường ABC, Quận 1, TP.HCM</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Mã đồng hồ nước</p>
                        <p>DH12345</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Ngày thanh toán</p>
                        <p>10/03/2025</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Phương thức thanh toán</p>
                        <p>Thanh toán trực tuyến</p>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chỉ số cũ</span>
                        <span>1190</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chỉ số mới</span>
                        <span>1220</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lượng nước tiêu thụ</span>
                        <span>30 m³</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tiền nước</span>
                        <span>240,000 VNĐ</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Phí bảo vệ môi trường</span>
                        <span>24,000 VNĐ</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Phí dịch vụ</span>
                        <span>20,000 VNĐ</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Thuế VAT (10%)</span>
                        <span>36,000 VNĐ</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-bold">
                        <span>Tổng cộng</span>
                        <span>320,000 VNĐ</span>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-md border border-green-200 flex items-start space-x-3">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-green-800">Hóa đơn đã thanh toán</h3>
                        <p className="text-sm text-green-700">
                          Cảm ơn bạn đã thanh toán hóa đơn đúng hạn.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      Tải hóa đơn PDF
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>


  )
}

export default LookupPage;

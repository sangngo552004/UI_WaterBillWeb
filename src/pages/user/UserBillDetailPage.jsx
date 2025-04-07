import {Link , useParams} from "react-router-dom";
import { ArrowLeft, Download, Droplet, Home, Info, Receipt } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const  UserBillDetailPage = () => {
  const params = useParams ();
  console.log(params);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/user/hoa-don">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Chi tiết hóa đơn #{params.id}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Tải PDF
          </Button>
          <Button>Thanh toán</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Receipt className="mr-2 h-5 w-5" />
                Thông tin hóa đơn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Mã hóa đơn</p>
                  <p className="font-medium">{params.id}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Kỳ hóa đơn</p>
                  <p>Tháng 4/2025</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Ngày phát hành</p>
                  <p>05/04/2025</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Hạn thanh toán</p>
                  <p>15/04/2025</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Trạng thái</p>
                  <p>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-300">
                      Chưa thanh toán
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Thông tin hộ gia đình
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Tên chủ hộ</p>
                  <p className="font-medium">Nguyễn Văn A</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Mã hộ</p>
                  <p>HGD001</p>
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
                  <p className="text-sm font-medium text-muted-foreground">Loại khách hàng</p>
                  <p>Hộ gia đình</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Droplet className="mr-2 h-5 w-5" />
                Chi tiết sử dụng nước
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Chỉ số cũ</p>
                    <p className="font-medium">1220</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Chỉ số mới</p>
                    <p className="font-medium">1250</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Lượng nước tiêu thụ</p>
                    <p className="font-medium">30 m³</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Ngày ghi chỉ số</p>
                    <p>01/04/2025</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Chi tiết tính tiền</h3>
                  <div className="space-y-2">
                    <div className="grid grid-cols-4 text-sm">
                      <div>Bậc</div>
                      <div>Định mức (m³)</div>
                      <div>Đơn giá (VNĐ/m³)</div>
                      <div>Thành tiền (VNĐ)</div>
                    </div>
                    <div className="grid grid-cols-4 text-sm">
                      <div>Bậc 1</div>
                      <div>10</div>
                      <div>6,000</div>
                      <div>60,000</div>
                    </div>
                    <div className="grid grid-cols-4 text-sm">
                      <div>Bậc 2</div>
                      <div>10</div>
                      <div>8,000</div>
                      <div>80,000</div>
                    </div>
                    <div className="grid grid-cols-4 text-sm">
                      <div>Bậc 3</div>
                      <div>10</div>
                      <div>10,000</div>
                      <div>100,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tổng cộng</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
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
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Tổng cộng</span>
                  <span>320,000 VNĐ</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Thanh toán ngay</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="mr-2 h-5 w-5" />
                Hướng dẫn thanh toán
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Thanh toán trực tuyến</h3>
                  <p className="text-sm text-muted-foreground">
                    Thanh toán trực tuyến qua cổng thanh toán an toàn với thẻ ATM, Visa, MasterCard hoặc ví điện tử.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Chuyển khoản ngân hàng</h3>
                  <p className="text-sm text-muted-foreground">Chuyển khoản đến tài khoản:</p>
                  <p className="text-sm">
                    Ngân hàng: BIDV
                    <br />
                    Số tài khoản: 12345678901234
                    <br />
                    Chủ tài khoản: Công ty Cấp nước
                    <br />
                    Nội dung: {params.id} - HGD001
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Thanh toán tại quầy</h3>
                  <p className="text-sm text-muted-foreground">
                    Quý khách có thể thanh toán trực tiếp tại văn phòng công ty tại địa chỉ: 123 Đường Nước, Quận 1,
                    TP.HCM.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default UserBillDetailPage;


import React, { useState, useEffect } from "react"; // Thêm hook
// Sửa import: dùng react-router-dom thay vì next/link
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building, CreditCard, Landmark, QrCode, Smartphone, AlertTriangle } from "lucide-react"; // Thêm AlertTriangle
import { Alert, AlertDescription } from "@/components/ui/alert"; // Thêm Alert

// Đổi tên component cho phù hợp (tùy chọn)
export default function SupportPaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [bill, setBill] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (location.state?.bill) {
      setBill(location.state.bill);
    } else {
      setError("Không tìm thấy thông tin hóa đơn.");
      // setTimeout(() => navigate('/lookup'), 3000);
    }
  }, [location.state, navigate]);

  // --- Render khi có lỗi không tìm thấy hóa đơn ---
   if (error && !bill) {
      return (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto text-center">
            <Alert variant="destructive" className="mb-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
            <Button onClick={() => navigate('/tra-cuu')}>Quay lại trang tra cứu</Button>
          </div>
        </div>
      );
   }

  // --- Render khi chưa có bill (đang tải) ---
  if (!bill) {
    return <div className="container mx-auto px-4 py-8 text-center">Đang tải thông tin hóa đơn...</div>;
  }

  // --- Render nội dung chính ---
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          {/* Sửa Link */}
          <Link to="/tra-cuu" className="text-blue-600 hover:underline flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại tra cứu
          </Link>
          <h1 className="text-2xl font-bold ml-4">Hướng dẫn thanh toán tại điểm thu/ngân hàng</h1>
        </div>

        <div className="space-y-8">
          {/* Hiển thị thông tin hóa đơn động */}
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-xl font-semibold mb-4">Thông tin thanh toán</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium">Mã khách hàng:</p>
                {/* Giả sử có customerCode trong bill */}
                <p className="text-lg font-bold">{bill.customerCode || 'N/A'}</p>
              </div>
              <div>
                <p className="font-medium">Mã hóa đơn:</p>
                <p className="text-lg font-bold">{bill.id}</p>
              </div>
              <div>
                <p className="font-medium">Khách hàng:</p>
                <p>{bill.customerName}</p>
              </div>
              <div>
                <p className="font-medium">Số tiền:</p>
                <p className="text-lg font-bold text-red-600">{bill.total?.toLocaleString('vi-VN')} VNĐ</p>
              </div>
              <div>
                <p className="font-medium">Hạn thanh toán:</p>
                <p>{bill.dueDate || 'N/A'}</p>
              </div>
               {/* Thêm Mã hộ gia đình nếu cần */}
               <div>
                 <p className="font-medium">Mã hộ gia đình:</p>
                 <p>{bill.householdCode || 'N/A'}</p>
               </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold">Phương thức thanh toán</h2>

          {/* --- Card Thanh toán qua ngân hàng --- */}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Landmark className="h-6 w-6 mr-2 text-blue-600" />
                <CardTitle>Thanh toán qua ngân hàng</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Thông tin chuyển khoản:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {/* ... (Thông tin ngân hàng giữ nguyên hoặc lấy từ cấu hình) */}
                    <li>
                      <span className="font-medium">Tên tài khoản:</span> CÔNG TY CỔ PHẦN NƯỚC SẠCH WATERBILL
                    </li>
                    <li>
                      <span className="font-medium">Số tài khoản:</span> 1234 5678 9012 3456
                    </li>
                    <li>
                      <span className="font-medium">Ngân hàng:</span> Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)
                    </li>
                    <li>
                      <span className="font-medium">Chi nhánh:</span> TP. Hồ Chí Minh
                    </li>
                    <li>
                      <span className="font-medium">Nội dung chuyển khoản:</span>{" "}
                      {/* Hiển thị nội dung động */}
                      <span className="bg-yellow-100 p-1 font-bold">
                        {bill.customerCode || bill.householdCode || 'MaKH'} {bill.id}
                      </span> (Mã khách hàng/hộ và mã hóa đơn)
                    </li>
                  </ul>
                </div>
                {/* ... (Lưu ý khi chuyển khoản giữ nguyên) */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Lưu ý khi chuyển khoản:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Vui lòng ghi đúng nội dung chuyển khoản để hệ thống có thể xác nhận thanh toán tự động.</li>
                    <li>
                      Thời gian xác nhận thanh toán: 1-2 ngày làm việc sau khi chuyển khoản thành công (không tính thứ
                      7, chủ nhật và ngày lễ).
                    </li>
                    <li>
                      Nếu cần hỗ trợ, vui lòng liên hệ hotline: <span className="font-medium">1900 1234</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* --- Card Thanh toán bằng mã QR --- */}
          <Card>
             {/* ... (Nội dung QR giữ nguyên, mã QR thực tế cần tạo động hoặc lấy từ API) */}
             <CardHeader>
               <div className="flex items-center">
                 <QrCode className="h-6 w-6 mr-2 text-blue-600" />
                 <CardTitle>Thanh toán bằng mã QR</CardTitle>
               </div>
             </CardHeader>
             <CardContent>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                 <div>
                   <h3 className="font-medium mb-2">Quét mã QR để thanh toán:</h3>
                   <p className="text-sm mb-4">
                     Sử dụng ứng dụng ngân hàng hoặc ví điện tử để quét mã QR bên cạnh và thanh toán nhanh chóng.
                     Mã QR đã bao gồm thông tin hóa đơn <span className="font-medium">{bill.id}</span> và số tiền <span className="font-medium">{bill.total?.toLocaleString('vi-VN')} VNĐ</span>.
                   </p>
                   <h4 className="font-medium mt-4">Hướng dẫn:</h4>
                   <ol className="list-decimal pl-5 space-y-1 text-sm">
                     <li>Mở ứng dụng ngân hàng hoặc ví điện tử</li>
                     <li>Chọn chức năng quét mã QR</li>
                     <li>Quét mã QR bên cạnh</li>
                     <li>Kiểm tra thông tin và xác nhận thanh toán</li>
                   </ol>
                 </div>
                 <div className="flex justify-center">
                   {/* Placeholder cho mã QR */}
                   <div className="bg-white p-4 border rounded-lg w-48 h-48 flex items-center justify-center">
                     <div className="text-center">
                       {/* Thay thế bằng component QR thực tế */}
                       <QrCode className="text-6xl mb-2 text-gray-400" />
                       <p className="text-sm text-gray-500">Mã QR VietQR/VNPay</p>
                       <p className="text-xs text-gray-400">(Cần tích hợp thư viện QR)</p>
                     </div>
                   </div>
                 </div>
               </div>
             </CardContent>
          </Card>

          {/* --- Card Thanh toán tại quầy giao dịch --- */}
          <Card>
            {/* ... (Nội dung thanh toán tại quầy giữ nguyên) */}
             <CardHeader>
               <div className="flex items-center">
                 <Building className="h-6 w-6 mr-2 text-blue-600" />
                 <CardTitle>Thanh toán tại quầy giao dịch</CardTitle>
               </div>
             </CardHeader>
             <CardContent>
               <div className="space-y-4">
                 <p>
                   Quý khách có thể thanh toán trực tiếp tại các quầy giao dịch của WaterBill hoặc các đơn vị thu hộ sau:
                 </p>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {/* ... (Danh sách ngân hàng và đơn vị thu hộ giữ nguyên) */}
                   <div className="border rounded-lg p-4">
                     <h3 className="font-medium mb-2 flex items-center">
                       <Landmark className="h-5 w-5 mr-2 text-blue-600" />
                       Ngân hàng
                     </h3>
                     <ul className="list-disc pl-5 space-y-1 text-sm">
                       <li>Vietcombank</li>
                       <li>BIDV</li>
                       <li>Agribank</li>
                       <li>VietinBank</li>
                       <li>Và các ngân hàng khác</li>
                     </ul>
                   </div>

                   <div className="border rounded-lg p-4">
                     <h3 className="font-medium mb-2 flex items-center">
                       <Smartphone className="h-5 w-5 mr-2 text-blue-600" />
                       Đơn vị thu hộ
                     </h3>
                     <ul className="list-disc pl-5 space-y-1 text-sm">
                       <li>Bưu điện Việt Nam</li>
                       <li>Payoo</li>
                       <li>VNPay</li>
                       <li>MoMo</li>
                       <li>Và các đơn vị khác</li>
                     </ul>
                   </div>
                 </div>

                 <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="font-medium mb-2">Lưu ý khi thanh toán tại quầy:</h3>
                   <ul className="list-disc pl-5 space-y-1 text-sm">
                     <li>Vui lòng mang theo mã khách hàng (<span className="font-medium">{bill.customerCode || 'N/A'}</span>) hoặc mã hóa đơn (<span className="font-medium">{bill.id}</span>) khi đến thanh toán.</li>
                     <li>Giữ lại biên lai thanh toán để đối chiếu khi cần thiết.</li>
                     <li>
                       Một số đơn vị thu hộ có thể thu thêm phí dịch vụ, vui lòng kiểm tra trước khi thực hiện thanh
                       toán.
                     </li>
                   </ul>
                 </div>
               </div>
             </CardContent>
          </Card>

          {/* --- Nút điều hướng cuối trang --- */}
          <div className="flex justify-between mt-8">
            {/* Sửa Link */}
            <Link to="/tra-cuu">
              <Button variant="outline">Quay lại tra cứu</Button>
            </Link>
            {/* Sửa Link và dùng navigate */}
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate('/thanh-toan-truc-tuyen', { state: { bill: bill } })}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Thanh toán trực tuyến
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

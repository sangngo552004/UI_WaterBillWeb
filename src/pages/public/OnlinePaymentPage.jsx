import React, { useState, useEffect } from "react"; // Thêm useEffect
// Sửa import: dùng react-router-dom thay vì next/link
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CheckCircle2, CreditCard, Wallet, AlertTriangle } from "lucide-react"; // Thêm AlertTriangle
import { Alert, AlertDescription } from "@/components/ui/alert";

// Đổi tên component cho phù hợp (tùy chọn)
const OnlinePaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [bill, setBill] = useState(null); // State để lưu thông tin hóa đơn

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(""); // State cho lỗi

  // Lấy dữ liệu bill từ location state khi component mount
  useEffect(() => {
    if (location.state?.bill) {
      setBill(location.state.bill);
    } else {
      // Xử lý trường hợp không có bill data (ví dụ: truy cập trực tiếp URL)
      setError("Không tìm thấy thông tin hóa đơn để thanh toán.");
      // Có thể điều hướng về trang tra cứu sau vài giây
      // setTimeout(() => navigate('/lookup'), 3000);
    }
  }, [location.state, navigate]); // Dependency array

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill) return; // Không xử lý nếu không có bill

    setIsProcessing(true);
    setError(""); // Xóa lỗi cũ

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Giả lập thành công hoặc thất bại
      const paymentSuccess = Math.random() > 0.1; // 90% thành công
      if (paymentSuccess) {
        setIsSuccess(true);
      } else {
        setError("Thanh toán không thành công. Vui lòng thử lại hoặc chọn phương thức khác.");
      }
    }, 2000);
  };

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

  // --- Render khi thanh toán thành công ---
  if (isSuccess && bill) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          {/* ... (Giao diện thành công giữ nguyên, nhưng dùng dữ liệu bill động) */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle2 className="h-16 w-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-4">Thanh toán thành công!</h1>
          <p className="mb-6">
            Cảm ơn bạn đã thanh toán hóa đơn. Hệ thống đã ghi nhận thanh toán của bạn và sẽ cập nhật trong vòng 24 giờ.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="font-medium mb-2">Thông tin thanh toán</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-left">Mã hóa đơn:</div>
              <div className="text-right font-medium">{bill.id}</div>
              <div className="text-left">Số tiền:</div>
              <div className="text-right font-medium">{bill.total?.toLocaleString('vi-VN')} VNĐ</div>
              <div className="text-left">Ngày thanh toán:</div>
              {/* Lấy ngày hiện tại làm ví dụ */}
              <div className="text-right font-medium">{new Date().toLocaleDateString('vi-VN')}</div>
              <div className="text-left">Mã giao dịch:</div>
              <div className="text-right font-medium">TXN{Math.random().toString(36).substring(2, 10).toUpperCase()}</div> {/* Mã GD giả */}
            </div>
          </div>
          <div className="space-x-4">
            {/* Sửa Link */}
            <Link to="/">
              <Button variant="outline">Về trang chủ</Button>
            </Link>
            <Link to="/tra-cuu">
              <Button className="bg-blue-600 hover:bg-blue-700">Tra cứu hóa đơn khác</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- Render form thanh toán (chỉ khi có bill) ---
  if (!bill) {
    // Có thể hiển thị loading hoặc null trong khi chờ useEffect chạy
    return <div className="container mx-auto px-4 py-8 text-center">Đang tải thông tin hóa đơn...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          {/* Sửa Link */}
          <Link to="/tra-cuu" className="text-blue-600 hover:underline flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại tra cứu
          </Link>
          <h1 className="text-2xl font-bold ml-4">Thanh toán trực tuyến</h1>
        </div>

        {/* Hiển thị thông tin hóa đơn động */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
          <h2 className="text-xl font-semibold mb-4">Thông tin hóa đơn</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Mã hóa đơn:</p>
              <p className="text-lg font-bold">{bill.id}</p>
            </div>
            <div>
              <p className="font-medium">Khách hàng:</p>
              <p>{bill.customerName}</p>
            </div>
            <div>
              <p className="font-medium">Kỳ thanh toán:</p>
              <p>{bill.period}</p>
            </div>
            <div>
              <p className="font-medium">Số tiền:</p>
              <p className="text-lg font-bold text-red-600">{bill.total?.toLocaleString('vi-VN')} VNĐ</p>
            </div>
             {/* Thêm hạn thanh toán nếu có */}
             {bill.dueDate && (
                <div>
                    <p className="font-medium">Hạn thanh toán:</p>
                    <p>{bill.dueDate}</p>
                </div>
             )}
          </div>
        </div>

        {/* Hiển thị lỗi thanh toán nếu có */}
        {error && (
          <Alert variant="destructive" className="mb-4">
             <AlertTriangle className="h-4 w-4" />
             <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
          {/* ... (TabsList giữ nguyên) */}
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="card">Thẻ ngân hàng</TabsTrigger>
            <TabsTrigger value="ewallet">Ví điện tử</TabsTrigger>
          </TabsList>

          {/* --- Tab Thẻ ngân hàng --- */}
          <TabsContent value="card">
            <Card>
              {/* ... (CardHeader, CardContent với form giữ nguyên) */}
               <CardHeader>
                 <CardTitle>Thanh toán bằng thẻ</CardTitle>
                 <CardDescription>Thanh toán an toàn với thẻ ATM, Visa, hoặc MasterCard</CardDescription>
               </CardHeader>
               <CardContent>
                 <form onSubmit={handleSubmit}>
                   <div className="space-y-4">
                     {/* RadioGroup chọn loại thẻ */}
                     <RadioGroup defaultValue="credit" className="grid grid-cols-3 gap-4">
                       {/* ... (Radio items giữ nguyên) */}
                       <div>
                         <RadioGroupItem value="credit" id="credit" className="peer sr-only" />
                         <Label
                           htmlFor="credit"
                           className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                         >
                           <CreditCard className="mb-3 h-6 w-6" />
                           Visa/Master
                         </Label>
                       </div>
                       <div>
                         <RadioGroupItem value="debit" id="debit" className="peer sr-only" />
                         <Label
                           htmlFor="debit"
                           className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                         >
                           <CreditCard className="mb-3 h-6 w-6" />
                           ATM nội địa
                         </Label>
                       </div>
                       <div>
                         <RadioGroupItem value="qr" id="qr" className="peer sr-only" />
                         <Label
                           htmlFor="qr"
                           className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                         >
                           <Wallet className="mb-3 h-6 w-6" />
                           QR Code
                         </Label>
                       </div>
                     </RadioGroup>

                     {/* Input fields */}
                     <div className="grid gap-2">
                       <Label htmlFor="cardNumber">Số thẻ</Label>
                       <Input
                         id="cardNumber"
                         placeholder="1234 5678 9012 3456"
                         value={cardNumber}
                         onChange={(e) => setCardNumber(e.target.value)}
                       />
                     </div>
                     {/* ... (Các input khác: Tên chủ thẻ, Ngày hết hạn, CVV giữ nguyên) */}
                      <div className="grid gap-2">
                        <Label htmlFor="cardName">Tên chủ thẻ</Label>
                        <Input
                          id="cardName"
                          placeholder="NGUYEN VAN A"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="expiryDate">Ngày hết hạn</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} />
                        </div>
                      </div>
                   </div>
                   {/* Nút submit không cần trong form nếu dùng onClick ở CardFooter */}
                 </form>
               </CardContent>
              <CardFooter>
                {/* Cập nhật nút thanh toán */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleSubmit} disabled={isProcessing}>
                  {isProcessing ? "Đang xử lý..." : `Thanh toán ${bill.total?.toLocaleString('vi-VN')} VNĐ`}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* --- Tab Ví điện tử --- */}
          <TabsContent value="ewallet">
             <Card>
               {/* ... (CardHeader, CardContent với RadioGroup ví và Alert giữ nguyên) */}
                <CardHeader>
                  <CardTitle>Thanh toán bằng ví điện tử</CardTitle>
                  <CardDescription>Thanh toán nhanh chóng với các ví điện tử phổ biến</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* RadioGroup chọn ví */}
                    <RadioGroup defaultValue="momo" className="grid grid-cols-3 gap-4">
                       {/* ... (Radio items ví giữ nguyên) */}
                       <div>
                         <RadioGroupItem value="momo" id="momo" className="peer sr-only" />
                         <Label
                           htmlFor="momo"
                           className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                         >
                           <div className="mb-3 text-pink-500 text-xl font-bold">MoMo</div>
                           MoMo
                         </Label>
                       </div>
                       <div>
                         <RadioGroupItem value="zalopay" id="zalopay" className="peer sr-only" />
                         <Label
                           htmlFor="zalopay"
                           className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                         >
                           <div className="mb-3 text-blue-500 text-xl font-bold">ZaloPay</div>
                           ZaloPay
                         </Label>
                       </div>
                       <div>
                         <RadioGroupItem value="vnpay" id="vnpay" className="peer sr-only" />
                         <Label
                           htmlFor="vnpay"
                           className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                         >
                           <div className="mb-3 text-red-500 text-xl font-bold">VNPay</div>
                           VNPay
                         </Label>
                       </div>
                    </RadioGroup>

                    {/* Alert hướng dẫn */}
                    <Alert className="bg-blue-50 border-blue-200">
                      <AlertDescription>
                        Khi bạn nhấn nút "Thanh toán", hệ thống sẽ chuyển bạn đến trang thanh toán của ví điện tử đã chọn.
                        Vui lòng làm theo hướng dẫn để hoàn tất thanh toán.
                      </AlertDescription>
                    </Alert>

                    {/* Lưu ý */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      {/* ... (Nội dung lưu ý giữ nguyên) */}
                       <h3 className="font-medium mb-2">Lưu ý:</h3>
                       <ul className="list-disc pl-5 space-y-1 text-sm">
                         <li>Đảm bảo ví điện tử của bạn đã được liên kết với tài khoản ngân hàng hoặc có đủ số dư.</li>
                         <li>
                           Sau khi thanh toán thành công, vui lòng không đóng trình duyệt cho đến khi nhận được thông báo
                           xác nhận.
                         </li>
                         <li>Hóa đơn sẽ được cập nhật trạng thái thanh toán trong vòng 24 giờ.</li>
                       </ul>
                    </div>
                  </div>
                </CardContent>
               <CardFooter>
                 {/* Cập nhật nút thanh toán */}
                 <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleSubmit} disabled={isProcessing}>
                   {isProcessing ? "Đang xử lý..." : `Thanh toán ${bill.total?.toLocaleString('vi-VN')} VNĐ`}
                 </Button>
               </CardFooter>
             </Card>
          </TabsContent>
        </Tabs>

        {/* ... (Phần Điều khoản dịch vụ giữ nguyên, có thể sửa Link nếu cần) */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Bằng việc nhấn nút "Thanh toán", bạn đồng ý với{" "}
            {/* Sửa Link nếu cần */}
            <Link to="/dieu-khoan" className="text-blue-600 hover:underline">
              Điều khoản dịch vụ
            </Link>{" "}
            và{" "}
            <Link to="/chinh-sach-bao-mat" className="text-blue-600 hover:underline">
              Chính sách bảo mật
            </Link>{" "}
            của chúng tôi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OnlinePaymentPage;

//
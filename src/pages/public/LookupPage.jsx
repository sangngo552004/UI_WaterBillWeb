import { useState, React } from "react"; // Thêm useState và React
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight, FileText, CreditCard, Building, AlertCircle, Loader2 , Clock} from "lucide-react"; // Thêm Loader2
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import SectionHeader from "@/components/common/SectionHeader";
import { Alert, AlertDescription } from "@/components/ui/alert"; // Thêm Alert, AlertDescription



// --- Giả lập dữ liệu hóa đơn ---
// --- Cập nhật Giả lập dữ liệu hóa đơn với nhiều đồng hồ ---
const mockBillData = {
  HGD001: { // Hộ có hóa đơn chưa thanh toán, 2 đồng hồ
    id: "HD12345",
    householdCode: "HGD001",
    period: "Tháng 4/2025",
    status: "unpaid",
    customerName: "Nguyễn Văn A",
    customerCode: "KH001",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    meters: [ // Mảng chứa thông tin các đồng hồ
      { meterCode: "DH12345", oldIndex: 1220, newIndex: 1250, consumption: 30 },
      { meterCode: "DH98765", oldIndex: 500, newIndex: 515, consumption: 15 }
    ],
    totalConsumption: 45, // Tổng lượng tiêu thụ (tính từ backend hoặc frontend)
    waterCost: 360000, // Tổng tiền nước (giả định đã tính)
    envFee: 36000,     // Tổng phí BVMT
    serviceFee: 20000, // Phí dịch vụ (có thể cố định)
    vat: 41600,       // Tổng VAT
    total: 457600,    // Tổng cộng
    dueDate: "15/04/2025"
  },
  HGD002: { // Hộ có hóa đơn đã thanh toán, 1 đồng hồ
    id: "HD12343",
    householdCode: "HGD002",
    period: "Tháng 3/2025",
    status: "paid",
    customerName: "Trần Thị B",
    customerCode: "KH002",
    address: "456 Đường XYZ, Quận 2, TP.HCM",
    meters: [ // Vẫn dùng mảng dù chỉ có 1 đồng hồ
      { meterCode: "DH67890", oldIndex: 1190, newIndex: 1220, consumption: 30 }
    ],
    totalConsumption: 30,
    waterCost: 240000,
    envFee: 24000,
    serviceFee: 20000,
    vat: 36000,
    total: 320000,
    paymentDate: "10/03/2025",
    paymentMethod: "Thanh toán trực tuyến"
  },
  HGD003: null // Hộ không có hóa đơn nào
}

// --- Hàm giả lập API call ---
const fetchLatestBill = (householdCode) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bill = mockBillData[householdCode];
      if (bill !== undefined) { // Kiểm tra xem mã hộ có trong dữ liệu giả lập không
        resolve(bill); // Trả về hóa đơn (có thể là null nếu HGD003)
      } else {
        reject("Mã hộ gia đình không tồn tại hoặc không tìm thấy hóa đơn.");
      }
    }, 1000); // Giả lập độ trễ mạng 1 giây
  });
};
// --- Component ---
const LookupPage = () => {
  const [householdCode, setHouseholdCode] = useState("");
  const [latestBill, setLatestBill] = useState(null); // Lưu hóa đơn mới nhất tìm được
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false); // Cờ để biết đã tìm kiếm chưa
  const navigate = useNavigate(); 
  const handleSearch = async (e) => {
    e.preventDefault(); // Ngăn form submit nếu dùng form
    if (!householdCode.trim()) {
      setError("Vui lòng nhập mã hộ gia đình.");
      setLatestBill(null);
      setSearchPerformed(true);
      return;
    }

    setIsLoading(true);
    setError("");
    setLatestBill(null); // Xóa kết quả cũ
    setSearchPerformed(true); // Đánh dấu đã thực hiện tìm kiếm

    try {
      const bill = await fetchLatestBill(householdCode.trim());
      setLatestBill(bill); // Lưu kết quả tìm được (có thể là null)
    } catch (err) {
      setError(err); // Lưu lỗi nếu có
    } finally {
      setIsLoading(false);
    }
  };

  const handlePayNow = () => {
    if (latestBill) {
      // Chuyển hướng đến trang thanh toán và truyền dữ liệu hóa đơn qua state
      navigate('/thanh-toan-truc-tuyen', { state: { bill: latestBill } });
    }
  };

  // --- Hàm xử lý khi nhấn nút Xem hướng dẫn ---
  const handleViewInstructions = () => {
    if (latestBill) {
      // Chuyển hướng đến trang hướng dẫn và truyền dữ liệu hóa đơn qua state
      navigate('/huong-dan-thanh-toan', { state: { bill: latestBill } });
    }
  };

  const renderBillDetails = (bill) => (
    <>
      {/* Thông tin chung */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4"> {/* Giảm gap-y */}
        <div>
          <p className="text-sm font-medium text-muted-foreground">Khách hàng</p>
          <p>{bill.customerName}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Mã hộ gia đình</p>
          <p>{bill.householdCode}</p>
        </div>
        <div className="col-span-2"> {/* Địa chỉ chiếm 2 cột */}
          <p className="text-sm font-medium text-muted-foreground">Địa chỉ</p>
          <p>{bill.address}</p>
        </div>
        {/* Thông tin thanh toán nếu có */}
        {bill.status === 'paid' && bill.paymentDate && (
          <div>
            <p className="text-sm font-medium text-muted-foreground">Ngày thanh toán</p>
            <p>{bill.paymentDate}</p>
          </div>
        )}
        {bill.status === 'paid' && bill.paymentMethod && (
          <div>
            <p className="text-sm font-medium text-muted-foreground">Phương thức thanh toán</p>
            <p>{bill.paymentMethod}</p>
          </div>
        )}
      </div>

      <Separator className="my-4" />

      {/* Chi tiết sử dụng theo từng đồng hồ */}
      <h3 className="text-base font-medium mb-3">Chi tiết sử dụng theo đồng hồ</h3>
      <div className="space-y-4 mb-4">
        {bill.meters?.map((meter, index) => (
          <div key={meter.meterCode} className="border border-dashed border-gray-300 p-3 rounded-md bg-gray-50/50">
             {/* Bỏ separator nếu chỉ có 1 đồng hồ hoặc là đồng hồ đầu tiên
             {index > 0 && <Separator className="my-3" />} */}
            <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2 text-gray-600" />
                <span className="font-medium text-gray-800">Đồng hồ: {meter.meterCode}</span>
            </div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-sm pl-6"> {/* Sử dụng grid 3 cột */}
              <div>
                <span className="text-muted-foreground">Chỉ số cũ:</span>
                <span className="ml-1">{meter.oldIndex}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Chỉ số mới:</span>
                <span className="ml-1">{meter.newIndex}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Tiêu thụ:</span>
                <span className="ml-1 font-medium">{meter.consumption} m³</span>
              </div>
            </div>
          </div>
        ))}
      </div>

       {/* Hiển thị tổng lượng tiêu thụ nếu có nhiều hơn 1 đồng hồ */}
       {bill.meters?.length > 1 && bill.totalConsumption !== undefined && (
         <div className="flex justify-between text-sm font-medium mb-4 px-1">
            <span className="text-muted-foreground">Tổng lượng tiêu thụ</span>
            <span>{bill.totalConsumption} m³</span>
         </div>
       )}


      <Separator className="my-4" />

      {/* Chi tiết hóa đơn (tổng hợp) */}
      <h3 className="text-base font-medium mb-3">Chi tiết hóa đơn</h3>
      <div className="space-y-2 mb-4">
        {/* Các dòng chi phí giữ nguyên, sử dụng giá trị tổng hợp từ bill */}
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tiền nước</span>
          <span>{bill.waterCost?.toLocaleString('vi-VN')} VNĐ</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Phí bảo vệ môi trường</span>
          <span>{bill.envFee?.toLocaleString('vi-VN')} VNĐ</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Phí dịch vụ</span>
          <span>{bill.serviceFee?.toLocaleString('vi-VN')} VNĐ</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Thuế VAT</span> {/* Bỏ % cố định */}
          <span>{bill.vat?.toLocaleString('vi-VN')} VNĐ</span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between font-bold text-lg">
          <span>Tổng cộng</span>
          <span>{bill.total?.toLocaleString('vi-VN')} VNĐ</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <SectionHeader title="Tra cứu hóa đơn tiền nước" description="" />

      <Tabs defaultValue="bill" className="w-full ">
        <TabsList className="grid grid-cols-1 w-max mx-auto mb-2">
          <TabsTrigger value="bill">Tra cứu theo mã hộ</TabsTrigger>
        </TabsList>
        <TabsContent value="bill">
          <Card>
            <CardHeader>
              <CardTitle>Tra cứu theo mã hộ gia đình</CardTitle>
              <CardDescription>Nhập mã hộ gia đình để tra cứu hóa đơn tiền nước mới nhất.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Sử dụng form để có thể submit bằng Enter */}
              <form onSubmit={handleSearch} className="flex space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Nhập mã hộ gia đình (VD: HGD001)"
                    className="pl-8"
                    value={householdCode}
                    onChange={(e) => setHouseholdCode(e.target.value)}
                    disabled={isLoading} // Vô hiệu hóa khi đang tải
                  />
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Search className="mr-2 h-4 w-4" />
                  )}
                  {isLoading ? "Đang tra cứu..." : "Tra cứu"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* --- Khu vực hiển thị kết quả --- */}
          <div className="mt-8">
            {/* Hiển thị khi đang tải */}
            {isLoading && (
              <div className="flex justify-center items-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                <span className="ml-2">Đang tải dữ liệu...</span>
              </div>
            )}

            {/* Hiển thị lỗi nếu có */}
            {!isLoading && searchPerformed && error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Hiển thị khi không tìm thấy hóa đơn hoặc đã thanh toán hết */}
            {!isLoading && searchPerformed && !error && !latestBill && (
              <Card>
                <CardHeader>
                  <CardTitle>Không có hóa đơn</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Không tìm thấy hóa đơn nào cần thanh toán cho mã hộ gia đình <span className="font-semibold">{householdCode}</span>.</p>
                  <p>Có thể bạn đã thanh toán hết hoặc mã hộ không chính xác.</p>
                </CardContent>
              </Card>
            )}

            {/* Hiển thị hóa đơn CHƯA thanh toán */}
            {!isLoading && latestBill && latestBill.status === 'unpaid' && (
              <Card className="border-yellow-300 shadow-md"> {/* Thêm border và shadow */}
                <CardHeader className="bg-yellow-50 border-b border-yellow-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center text-yellow-800"> {/* Đổi màu chữ */}
                        <FileText className="mr-2 h-5 w-5 text-yellow-600" />
                        Hóa đơn #{latestBill.id}
                      </CardTitle>
                      <CardDescription>Kỳ hóa đơn: {latestBill.period}</CardDescription>
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-700 border-yellow-300">
                      Chưa thanh toán
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  {renderBillDetails(latestBill)} {/* Gọi hàm render chi tiết */}

                  <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 flex items-start space-x-3 mb-6 mt-4"> {/* Thêm margin */}
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" /> {/* Thêm flex-shrink-0 */}
                    <div>
                      <h3 className="font-medium text-yellow-800">Hóa đơn chưa thanh toán</h3>
                      <p className="text-sm text-yellow-700">
                        Vui lòng thanh toán trước ngày {latestBill.dueDate} để tránh phát sinh phí trễ hạn.
                      </p>
                    </div>
                  </div>

                  {/* Phần thanh toán giữ nguyên */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-base">Phương thức thanh toán</h3> {/* Tăng cỡ chữ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border-blue-100 hover:border-blue-300 transition-colors cursor-pointer hover:shadow-sm">
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
                          <Button 
                          
                              onClick={handlePayNow} 
                              className="w-full bg-blue-600 hover:bg-blue-700"> {/* Đổi màu nút */}
                            Thanh toán ngay
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="border-gray-200 hover:border-gray-300 transition-colors cursor-pointer hover:shadow-sm">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center">
                            <Building className="mr-2 h-4 w-4 text-gray-500" />
                            Thanh toán tại điểm thu/ngân hàng
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Chuyển khoản qua ngân hàng hoặc thanh toán tại quầy giao dịch/điểm thu hộ.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button 
                              variant="outline" 
                              onClick={handleViewInstructions} 
                              className="w-full">
                            Xem hướng dẫn
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LookupPage;

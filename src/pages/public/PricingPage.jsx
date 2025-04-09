import React from 'react'; // Thêm React import
import { Check, Droplets, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useNavigate } from "react-router-dom"
import SectionHeader from "../../components/common/SectionHeader" // Đảm bảo đường dẫn đúng
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// --- Dữ liệu giả lập (Giữ nguyên cấu trúc hiện tại để minh họa) ---
// Trong thực tế, bạn sẽ fetch và xử lý dữ liệu từ API theo schema mới
const mockPricingData = [
  {
    type: 'household',
    name: 'Hộ gia đình',
    description: 'Áp dụng cho nước sinh hoạt của các hộ dân cư.',
    // Giả định CalculationMethod = "Tiered" vì có nhiều tiers
    tiers: [
      { level: 'Đến 10 m³', pricePerM3: 5973, envFeePercent: 10, vatPercent: 8 },
      { level: 'Từ 11-20 m³', pricePerM3: 7052, envFeePercent: 10, vatPercent: 8 },
      { level: 'Từ 21-30 m³', pricePerM3: 8699, envFeePercent: 10, vatPercent: 8 },
      { level: 'Trên 30 m³', pricePerM3: 15929, envFeePercent: 10, vatPercent: 8 },
    ],
  },
  {
    type: 'administrative',
    name: 'Cơ quan hành chính, sự nghiệp',
    description: 'Áp dụng cho các đơn vị hành chính công, đơn vị sự nghiệp công lập, mục đích công cộng.',
    // Giả định CalculationMethod = "Fixed" vì chỉ có 1 tier "Toàn bộ"
    tiers: [
      { level: 'Toàn bộ', pricePerM3: 9955, envFeePercent: 10, vatPercent: 8 },
    ],
  },
  {
    type: 'production',
    name: 'Đơn vị sản xuất',
    description: 'Áp dụng cho hoạt động sản xuất vật chất.',
    // Giả định CalculationMethod = "Fixed"
    tiers: [
      { level: 'Toàn bộ', pricePerM3: 11615, envFeePercent: 10, vatPercent: 8 },
    ],
  },
  {
    type: 'business',
    name: 'Kinh doanh, dịch vụ',
    description: 'Áp dụng cho hoạt động kinh doanh, dịch vụ (khách sạn, nhà hàng, siêu thị...).',
    // Giả định CalculationMethod = "Fixed"
    tiers: [
      { level: 'Toàn bộ', pricePerM3: 22068, envFeePercent: 10, vatPercent: 8 },
    ],
  },
];
const effectiveDate = "01/07/2024";
// --- Kết thúc dữ liệu giả lập ---


// --- Component hiển thị một hàng giá (Tiered hoặc Fixed) ---
// Tách ra để tránh lặp code tính toán
const PriceRow = ({ tier, isFixed = false }) => {
  // Tính toán chi phí tham khảo (đã bao gồm phí)
  const envFeeAmount = tier.pricePerM3 * (tier.envFeePercent / 100);
  const subTotal = tier.pricePerM3 + envFeeAmount;
  const vatAmount = subTotal * (tier.vatPercent / 100);
  const totalPerM3 = subTotal + vatAmount;

  return (
    <TableRow>
      <TableCell className="font-medium">{tier.level}</TableCell>
      <TableCell className="text-right">{tier.pricePerM3.toLocaleString('vi-VN')}</TableCell>
      <TableCell className="text-right hidden sm:table-cell">{tier.envFeePercent}%</TableCell>
      <TableCell className="text-right hidden sm:table-cell">{tier.vatPercent}%</TableCell>
      <TableCell className="text-right font-semibold">{Math.round(totalPerM3).toLocaleString('vi-VN')}</TableCell>
    </TableRow>
  );
};


const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tiêu đề trang */}
      <SectionHeader
        title="Bảng giá nước sạch"
        description={`Áp dụng từ ngày ${effectiveDate}. Đơn giá chưa bao gồm Phí bảo vệ môi trường và VAT.`}
      />

      {/* Danh sách bảng giá theo loại khách hàng */}
      {/* Thay đổi: Thêm div để căn giữa và giới hạn chiều rộng */}
      <div className="space-y-8 mt-8">
        {mockPricingData.map((customerType) => {
          // Xác định phương thức tính giá dựa trên dữ liệu mock (số lượng tiers)
          // Trong thực tế sẽ dựa vào trường CalculationMethod từ API
          const calculationMethod = customerType.tiers.length > 1 ? "Tiered" : "Fixed";

          return (
            // Thay đổi: Giới hạn chiều rộng Card và căn giữa
            <Card key={customerType.type} className="overflow-hidden max-w-3xl mx-auto"> {/* Ví dụ: max-w-3xl */}
              <CardHeader>
                <CardTitle>{customerType.name}</CardTitle>
                {customerType.description && (
                  <CardDescription>{customerType.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px] sm:w-[200px]">Mức sử dụng (m³)</TableHead>
                      <TableHead className="text-right">Giá nước (VNĐ/m³)</TableHead>
                      <TableHead className="text-right hidden sm:table-cell">Phí BVMT</TableHead>
                      <TableHead className="text-right hidden sm:table-cell">VAT</TableHead>
                      <TableHead className="text-right">Tổng cộng (VNĐ/m³)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {calculationMethod === "Tiered" ? (
                      // Nếu là Tiered, lặp qua các bậc giá
                      customerType.tiers.map((tier) => (
                        <PriceRow key={`${customerType.type}-${tier.level}`} tier={tier} />
                      ))
                    ) : (
                      // Nếu là Fixed, chỉ hiển thị 1 dòng từ tier đầu tiên
                      <PriceRow key={`${customerType.type}-fixed`} tier={customerType.tiers[0]} isFixed={true} />
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Ghi chú */}
      {/* Thay đổi: Giới hạn chiều rộng Alert và căn giữa */}
      <Alert className="mt-8 bg-blue-50 border-blue-200 text-blue-800 max-w-3xl mx-auto"> {/* Giống max-width của Card */}
        <Info className="h-4 w-4 !text-blue-600" />
        <AlertDescription>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Đơn giá nước sạch trên chưa bao gồm Phí bảo vệ môi trường (BVMT) đối với nước thải sinh hoạt và Thuế giá trị gia tăng (VAT).</li>
            {/* Lấy % từ tier đầu tiên của loại đầu tiên làm ví dụ */}
            <li>Phí BVMT được tính bằng {mockPricingData[0]?.tiers[0]?.envFeePercent || 10}% trên giá bán của 1m³ nước sạch chưa bao gồm VAT.</li>
            <li>Thuế VAT được tính bằng {mockPricingData[0]?.tiers[0]?.vatPercent || 8}% trên tổng giá bán nước sạch và phí BVMT.</li>
            <li>Cột "Tổng cộng" chỉ mang tính tham khảo, thể hiện chi phí ước tính cho 1 m³ nước ở từng mức giá (đã làm tròn và bao gồm phí BVMT, VAT).</li>
            <li>Bảng giá này có thể thay đổi theo quyết định của cơ quan có thẩm quyền. Vui lòng theo dõi thông báo mới nhất từ WaterBill.</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default PricingPage;

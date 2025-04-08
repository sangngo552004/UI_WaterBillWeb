import { Check, Droplets } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useNavigate } from "react-router-dom"
import SectionHeader from "../../components/common/SectionHeader"

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8" >
      
      <SectionHeader title="Bảng giá"  description="Chúng tôi cung cấp các gói dịch vụ linh hoạt phù hợp với nhu cầu của bạn. Dưới đây là chi tiết bảng giá cho
            từng loại khách hàng." />
            
      <div className="mt-8">
        <Tabs defaultValue="household" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="household">Hộ gia đình</TabsTrigger>
            <TabsTrigger value="business">Doanh nghiệp</TabsTrigger>
            <TabsTrigger value="government">Cơ quan nhà nước</TabsTrigger>
          </TabsList>
          <TabsContent value="household">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-blue-500" />
                  Hộ gia đình
                </CardTitle>
                <CardDescription>Phương pháp tính tiền: Tiered</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 items-center gap-4 rounded-lg border p-4">
                    <div>
                      <h3 className="font-medium">Mức sử dụng (m³)</h3>
                      <p className="text-sm text-gray-500">0 - 10</p>
                    </div>
                    <div className="text-right">
                      <h3 className="font-medium">Giá/m³</h3>
                      <p className="text-2xl font-bold text-blue-600">5.000 ₫</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-center gap-4 rounded-lg border p-4">
                    <div>
                      <h3 className="font-medium">Mức sử dụng (m³)</h3>
                      <p className="text-sm text-gray-500">11 - 20</p>
                    </div>
                    <div className="text-right">
                      <h3 className="font-medium">Giá/m³</h3>
                      <p className="text-2xl font-bold text-blue-600">4.500 ₫</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-center gap-4 rounded-lg border p-4">
                    <div>
                      <h3 className="font-medium">Mức sử dụng (m³)</h3>
                      <p className="text-sm text-gray-500">21 - ∞</p>
                    </div>
                    <div className="text-right">
                      <h3 className="font-medium">Giá/m³</h3>
                      <p className="text-2xl font-bold text-blue-600">4.000 ₫</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-800" onClick = {() => useNavigate("/register")}>Đăng ký dịch vụ</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="business">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-blue-500" />
                  Doanh nghiệp
                </CardTitle>
                <CardDescription>Phương pháp tính tiền: Fixed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 items-center gap-4 rounded-lg border p-4">
                    <div>
                      <h3 className="font-medium">Giá cố định</h3>
                      <p className="text-sm text-gray-500">Áp dụng cho mọi mức sử dụng</p>
                    </div>
                    <div className="text-right">
                      <h3 className="font-medium">Giá/m³</h3>
                      <p className="text-2xl font-bold text-blue-600">3.500 ₫</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-cyan-50 p-4">
                    <h3 className="font-medium text-blue-800">Ưu đãi đặc biệt</h3>
                    <ul className="mt-2 grid gap-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Hỗ trợ kỹ thuật ưu tiên</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Báo cáo sử dụng hàng tháng</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Tư vấn tiết kiệm nước</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-800 " onClick = {() => useNavigate("/register")}>Đăng ký dịch vụ</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="government">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-blue-500" />
                  Cơ quan nhà nước
                </CardTitle>
                <CardDescription>Phương pháp tính tiền: Tiered</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 items-center gap-4 rounded-lg border p-4">
                    <div>
                      <h3 className="font-medium">Mức sử dụng (m³)</h3>
                      <p className="text-sm text-gray-500">0 - 50</p>
                    </div>
                    <div className="text-right">
                      <h3 className="font-medium">Giá/m³</h3>
                      <p className="text-2xl font-bold text-blue-600">3.000 ₫</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-center gap-4 rounded-lg border p-4">
                    <div>
                      <h3 className="font-medium">Mức sử dụng (m³)</h3>
                      <p className="text-sm text-gray-500">51 - 100</p>
                    </div>
                    <div className="text-right">
                      <h3 className="font-medium">Giá/m³</h3>
                      <p className="text-2xl font-bold text-blue-600">2.500 ₫</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 items-center gap-4 rounded-lg border p-4">
                    <div>
                      <h3 className="font-medium">Mức sử dụng (m³)</h3>
                      <p className="text-sm text-gray-500">101 - ∞</p>
                    </div>
                    <div className="text-right">
                      <h3 className="font-medium">Giá/m³</h3>
                      <p className="text-2xl font-bold text-blue-600">2.000 ₫</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter >
                <Button className="w-full bg-blue-600 hover:bg-blue-800" onClick = {() => useNavigate("/register")} >Đăng ký dịch vụ</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold">Cần hỗ trợ thêm?</h2>
        <p className="mt-2 text-gray-500">Liên hệ với chúng tôi để được tư vấn về gói dịch vụ phù hợp nhất</p>
        <Button variant="outline" className="mt-4 border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => {navigate("/",  { state: { scrollTo: "contact" } })}}>
          Liên hệ ngay
        </Button>
      </div>
    </div>
  )
}



import React from "react";
import { useState } from "react"
import { MapPin, Phone, Mail, Calendar, Clock, User, Home, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import { toast } from "sonner";
import SectionHeader from "../../components/common/SectionHeader";

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    district: "",
    ward: "",
    serviceType: "household",
    appointmentDate: "",
    appointmentTime: "",
    additionalInfo: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name , value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast({
      title: "Đăng ký thành công!",
      description: "Nhân viên của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    })
    // Normally would submit to server here
  }


  return (
    <div className="container mx-auto px-4 py-8">
      
      <SectionHeader title = " Đăng ký dịch vụ" description = "Hoàn thành biểu mẫu dưới đây để đăng ký dịch vụ. Nhân viên của chúng tôi sẽ đến tận nhà để hỗ trợ bạn." />

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Văn phòng WaterBill</CardTitle>
              <CardDescription>Địa chỉ văn phòng chính và thông tin liên hệ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full h-[400px] rounded-md overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.77356371611!2d106.69728017431642!3d10.775054300000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc7%3A0x4db964d76bf6e18e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIFRQLiBIQ00!5e0!3m2!1svi!2s!4v1712222222222!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Địa chỉ:</h3>
                    <p className="text-gray-600">123 Đường ABC, Phường XYZ, Quận 1, TP.HCM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Điện thoại:</h3>
                    <p className="text-gray-600">0123456789</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email:</h3>
                    <p className="text-gray-600">info@waterbill.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Giờ làm việc:</h3>
                    <p className="text-gray-600">Thứ Hai - Thứ Sáu: 8:00 - 17:30</p>
                    <p className="text-gray-600">Thứ Bảy: 8:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quy trình đăng ký dịch vụ</CardTitle>
              <CardDescription>Các bước để hoàn tất đăng ký dịch vụ nước sạch</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-blue-600">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Điền thông tin đăng ký</h3>
                    <p className="text-sm text-gray-500">
                      Hoàn thành biểu mẫu đăng ký với đầy đủ thông tin cá nhân và địa chỉ lắp đặt.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-blue-600">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Xác nhận thông tin</h3>
                    <p className="text-sm text-gray-500">
                      Nhân viên của chúng tôi sẽ liên hệ để xác nhận thông tin và lịch hẹn.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-blue-600">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Khảo sát và tư vấn</h3>
                    <p className="text-sm text-gray-500">
                      Nhân viên kỹ thuật sẽ đến khảo sát và tư vấn phương án lắp đặt phù hợp.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-blue-600">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Ký hợp đồng và lắp đặt</h3>
                    <p className="text-sm text-gray-500">Ký kết hợp đồng và tiến hành lắp đặt hệ thống nước sạch.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-blue-600">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Bàn giao và hướng dẫn sử dụng</h3>
                    <p className="text-sm text-gray-500">Bàn giao hệ thống và hướng dẫn cách sử dụng, bảo trì.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Đăng ký dịch vụ</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Họ và tên</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Nguyễn Văn A"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0912345678"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="example@email.com"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Loại dịch vụ</Label>
                      <Tabs
                        defaultValue={formData.serviceType}
                        onValueChange={(value) => handleSelectChange("serviceType", value)}
                        className="w-full"
                      >
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="household">Hộ gia đình</TabsTrigger>
                          <TabsTrigger value="business">Doanh nghiệp</TabsTrigger>
                          <TabsTrigger value="government">Cơ quan</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
                <Button className="bg-blue-600 hover:bg-blue-800 ml-auto" onClick={handleSubmit}>
                    <CheckCircle className="mr-2 h-4 w-4" /> Hoàn tất đăng ký
                </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cần hỗ trợ?</CardTitle>
              <CardDescription>Liên hệ với chúng tôi nếu bạn cần trợ giúp</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100">
                    <Phone className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Hotline hỗ trợ</p>
                    <p className="text-sm text-gray-500">0123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email hỗ trợ</p>
                    <p className="text-sm text-gray-500">support@waterbill.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Giờ làm việc</p>
                    <p className="text-sm text-gray-500">8:00 - 17:30 (Th��� 2 - Thứ 6)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


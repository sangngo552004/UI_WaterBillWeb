import {Link} from "react-router-dom"
import { Lock, Mail, Phone, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Đăng ký tài khoản</CardTitle>
              <CardDescription className="text-center">Nhập thông tin của bạn để tạo tài khoản mới</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Họ và tên</Label>
                <div className="relative">
                  <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="fullName" placeholder="Nguyễn Văn A" className="pl-8" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="example@email.com" className="pl-8" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <div className="relative">
                  <Phone className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="phone" placeholder="0901234567" className="pl-8" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu</Label>
                <div className="relative">
                  <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="••••••••" className="pl-8" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
                <div className="relative">
                  <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="confirmPassword" type="password" placeholder="••••••••" className="pl-8" />
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm font-normal">
                  Tôi đồng ý với{" "}
                  <Link to="/dieu-khoan" className="text-blue-500 hover:text-blue-600">
                    Điều khoản sử dụng
                  </Link>{" "}
                  và{" "}
                  <Link to="/chinh-sach-bao-mat" className="text-blue-500 hover:text-blue-600">
                    Chính sách bảo mật
                  </Link>
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full">Đăng ký</Button>

              <div className="mt-4 text-center text-sm">
                Bạn đã có tài khoản?{" "}
                <Link href="/dang-nhap" className="text-blue-500 hover:text-blue-600 font-medium">
                  Đăng nhập
                </Link>
              </div>

            </CardFooter>
          </Card>
        </div>
      </main>

    
    </div>
  )
}

export default SignUpPage;
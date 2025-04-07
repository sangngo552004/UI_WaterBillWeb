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

              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">Hoặc đăng ký với</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button variant="outline">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M9.1 2.9c-1.1.1-2.2.6-3 1.3-.7.7-1.2 1.5-1.4 2.5-.1.3-.1.9-.1 1.2 0 .9.2 1.7.5 2.4.3.7.8 1.3 1.4 1.8.6.5 1.3.9 2.1 1 .3 0 .9 0 1.2-.1.9-.2 1.7-.7 2.4-1.4.6-.6 1.1-1.4 1.3-2.3.1-.3.1-.9.1-1.2 0-.9-.2-1.7-.5-2.4-.3-.7-.8-1.3-1.4-1.8-.6-.5-1.3-.9-2.1-1-.2 0-.4 0-.5 0zm-3.8 9.8c-.9.3-1.8.8-2.6 1.5-1.2 1-2.2 2.3-2.6 3.8-.3.9-.3 1.3-.3 2.5 0 1.2 0 1.6.3 2.5.5 1.5 1.4 2.8 2.6 3.8.8.7 1.7 1.2 2.6 1.5.9.3 1.3.3 2.5.3 1.2 0 1.6 0 2.5-.3.9-.3 1.8-.8 2.6-1.5 1.2-1 2.2-2.3 2.6-3.8.3-.9.3-1.3.3-2.5 0-1.2 0-1.6-.3-2.5-.5-1.5-1.4-2.8-2.6-3.8-.8-.7-1.7-1.2-2.6-1.5-.9-.3-1.3-.3-2.5-.3-1.2 0-1.6 0-2.5.3z"
                      fill="#1877F2"
                    />
                  </svg>
                  Facebook
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

    
    </div>
  )
}

export default SignUpPage;
import {Link} from "react-router-dom";
import { Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"


const LoginPage = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Đăng nhập</CardTitle>
              <CardDescription className="text-center">
                Nhập thông tin đăng nhập để truy cập vào tài khoản của bạn
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="example@email.com" className="pl-8" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mật khẩu</Label>
                  <Link href="/quen-mat-khau" className="text-sm text-blue-500 hover:text-blue-600">
                    Quên mật khẩu?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="••••••••" className="pl-8" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Ghi nhớ đăng nhập
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full" asChild>
                <Link href="/user">Đăng nhập</Link>
              </Button>

              <div className="mt-4 text-center text-sm">
                Bạn chưa có tài khoản?{" "}
                <Link to="/sign-up" className="text-blue-500 hover:text-blue-600 font-medium">
                  Đăng ký ngay
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      
    </div>
  )
}

export default LoginPage;
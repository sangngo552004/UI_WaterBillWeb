import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MailIcon , Droplet} from "lucide-react"

export default function ForgetPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="mb-8 flex items-center text-blue-500">
        <Droplet className="w-6 h-6" />
        <span className="text-2xl font-bold">WaterBill</span>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Quên mật khẩu</CardTitle>
          <CardDescription>Nhập email của bạn để nhận mã xác thực OTP</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <MailIcon className="h-5 w-5" />
                </div>
                <Input id="email" type="email" placeholder="admin@waterbill.com" className="pl-10" />
              </div>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-800">
              Gửi mã OTP
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/dang-nhap" className="text-sm text-blue-500 hover:underline">
            Quay lại trang đăng nhập
          </Link>
        </CardFooter>
      </Card>

    </div>
  )
}

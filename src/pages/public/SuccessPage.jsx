import {Link} from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Droplet } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="mb-8 flex items-center text-blue-500">
      <Droplet className="w-6 h-6" />
        <span className="text-2xl font-bold">WaterBill</span>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Đặt lại mật khẩu thành công</CardTitle>
          <CardDescription>
            Mật khẩu của bạn đã được đặt lại thành công. Bây giờ bạn có thể đăng nhập bằng mật khẩu mới.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-800">
            <Link to="/dang-nhap">Đăng nhập</Link>
          </Button>
        </CardContent>
      </Card>

    </div>
  )
}

import  React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Droplet } from "lucide-react"


export default function OtpConfirmPage() {
  const [value, setValue] = useState("")
  const [isResending, setIsResending] = useState(false)

  const handleResendOTP = () => {
    setIsResending(true)
    // Giả lập gửi lại OTP
    setTimeout(() => {
      setIsResending(false)
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="mb-8 flex items-center text-blue-500">
        <Droplet className="w-6 h-6" />
        <span className="text-2xl font-bold">WaterBill</span>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Xác thực OTP</CardTitle>
          <CardDescription>Nhập mã OTP 6 chữ số đã được gửi đến email của bạn</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center py-4">
            <InputOTP value={value} onChange={setValue} maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-800">
            Xác nhận
          </Button>
          <div className="text-center text-sm">
            <p className="text-gray-500 mb-1">Không nhận được mã?</p>
            <Button
              variant="link"
              className="text-blue-500 p-0 h-auto"
              onClick={handleResendOTP}
              disabled={isResending}
            >
              {isResending ? "Đang gửi lại..." : "Gửi lại mã OTP"}
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/quen-mat-khau" className="text-sm text-blue-500 hover:underline">
            Quay lại
          </Link>
        </CardFooter>
      </Card>

    </div>
  )
}

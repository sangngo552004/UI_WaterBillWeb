
import React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react";
import {toast} from "sonner";
import axios from "axios";




export default function RegistrationForm({ isRegistered, userData, onBack }) {

  const [formData, setFormData] = useState({
    fullName: userData?.fullName || "",
    email: userData?.email || "",
    phoneNumber: userData?.phoneNumber || "",
    identityNumber: userData?.identityNumber || "",
    username: "",
    password: "",
    confirmPassword: "",
  })
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu xác nhận không khớp")
      return
    }

    if (!agreed) {
      setError("Vui lòng đồng ý với điều khoản sử dụng và chính sách bảo mật")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const filteredData = {
          fullName: formData.fullName, 
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          identityNumber: formData.identityNumber,
          username: formData.username,
          password: formData.password 
        }
        
      const response = await axios.post(
        "http://localhost:8081/api/user/register",
        filteredData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        }
      );
      
      toast.info(response.message)
      
    } catch (err) {
      setError("Có lỗi xảy ra khi đăng ký")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={onBack} className="absolute left-4">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl w-full">Đăng ký tài khoản</CardTitle>
        </div>
        <CardDescription>
          {isRegistered
            ? "Thông tin của bạn đã được tìm thấy. Vui lòng tạo tên đăng nhập và mật khẩu."
            : "Nhập thông tin của bạn để tạo tài khoản mới"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Họ và tên</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Nguyễn Văn A"
              value={formData.fullName}
              onChange={handleChange}
              required
              readOnly={isRegistered}
              className={isRegistered ? "bg-gray-100" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              readOnly={isRegistered}
              className={isRegistered ? "bg-gray-100" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input
              id="phone"
              name="phoneNumber"
              placeholder="0901234567"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              readOnly={isRegistered}
              className={isRegistered ? "bg-gray-100" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="identityNumber">CCCD</Label>
            <Input
              id="identityNumber"
              name="identityNumber"
              placeholder="0901234567"
              value={formData.identityNumber}
              onChange={handleChange}
              required
              readOnly={isRegistered}
              className={isRegistered ? "bg-gray-100" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Tên đăng nhập</Label>
            <Input
              id="username"
              name="username"
              placeholder="Tên đăng nhập"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <p className="text-xs text-muted-foreground">
              Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked)} />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tôi đồng ý với{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Điều khoản sử dụng
              </a>{" "}
              và{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Chính sách bảo mật
              </a>
            </label>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" disabled={isSubmitting || !agreed} onClick={handleSubmit}>
          {isSubmitting ? "Đang xử lý..." : "Đăng ký"}
        </Button>
      </CardFooter>
    </Card>
  )
}

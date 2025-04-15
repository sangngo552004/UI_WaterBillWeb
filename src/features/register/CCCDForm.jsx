
import React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"



export default function CCCDForm({ onVerify }) {

  const [cccd, setCccd] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!cccd || cccd.length == 12) {
      setError("Vui lòng nhập số CCCD hợp lệ")
      return
    }
    setIsLoading(true)
    setError("")

    try {
      await onVerify(cccd)
    } catch (err) {
      setError("Có lỗi xảy ra khi kiểm tra CCCD")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Xác thực CCCD</CardTitle>
        <CardDescription>Vui lòng nhập số Căn cước công dân của bạn để tiếp tục</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cccd">Số CCCD</Label>
            <Input
              id="cccd"
              placeholder="Nhập số CCCD"
              type= "number"
              value={cccd}
              onChange={(e) => setCccd(e.target.value)}
              required
            />
            {error && <p className="text-sm text-blue-500">{error}</p>}
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Đang xử lý..." : "Tiếp tục"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

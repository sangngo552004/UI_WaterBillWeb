

import  React from "react";

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Send } from "lucide-react"


export function ContactForm() {
  // const { toast } = useToastStyles()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Giả lập gửi form
    await new Promise((resolve) => setTimeout(resolve, 3))

    // toast({
    //   title: "Gửi thành công!",
    //   description: "Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.",
    // })

    // Reset form
    e.currentTarget.reset()
    setIsSubmitting(false)
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Họ và tên</Label>
            <Input id="name" placeholder="Nguyễn Văn A" required />
          </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Số điện thoại</Label>
          <Input id="phone" placeholder="0123456789" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Nội dung câu hỏi</Label>
          <Textarea
            id="message"
            placeholder="Nhập câu hỏi hoặc thắc mắc của bạn tại đây..."
            className="min-h-[120px]"
            required
          />
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Đang gửi...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Gửi câu hỏi
            </span>
          )}
        </Button>
      </form>
    </Card>
  )
}


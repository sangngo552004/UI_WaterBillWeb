import React from 'react';
import  SupportForm from "./ContactForm";
import { HomeIcon, Phone, Mail, MapPin } from "lucide-react"

const Support = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">Hỗ trợ khách hàng</h1>
        <p className="text-gray-600 mb-8">
          Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn. Vui lòng liên hệ với chúng tôi qua các kênh
          dưới đây.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Thông tin liên hệ</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Điện thoại</h3>
                  <p className="text-gray-600">0123 456 789</p>
                  <p className="text-sm text-gray-500">Thứ Hai - Thứ Sáu: 8:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">support@waterbill.com</p>
                  <p className="text-sm text-gray-500">Phản hồi trong vòng 24 giờ</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Địa chỉ</h3>
                  <p className="text-gray-600">123 Đường Nước, Quận 1</p>
                  <p className="text-gray-600">TP. Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Gửi câu hỏi</h2>
            <p className="text-gray-600 mb-4">
              Điền thông tin và câu hỏi của bạn vào biểu mẫu dưới đây, chúng tôi sẽ phản hồi trong thời gian sớm nhất.
            </p>

            <SupportForm />
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h2 className="text-xl font-semibold mb-4">Câu hỏi thường gặp</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-blue-700">Làm thế nào để đọc chỉ số nước?</h3>
              <p className="text-gray-600">
                Chỉ số nước được ghi trên đồng hồ nước của bạn. Bạn chỉ cần đọc các số hiển thị trên đồng hồ từ trái
                sang phải.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-blue-700">Khi nào tôi nhận được hóa đơn?</h3>
              <p className="text-gray-600">
                Hóa đơn nước được phát hành vào ngày 10 hàng tháng và sẽ được gửi đến địa chỉ email hoặc địa chỉ nhà của
                bạn.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-blue-700">Làm thế nào để báo cáo sự cố rò rỉ nước?</h3>
              <p className="text-gray-600">
                Bạn có thể báo cáo sự cố rò rỉ nước bằng cách gọi đến số hotline 0123 456 789 hoặc gửi thông tin qua
                biểu mẫu liên hệ trên website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support;


import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const LookupPage = () => {
  const [apartmentCode, setApartmentCode] = useState('');
  const [billData, setBillData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLookup = async () => {
    setLoading(true);
    setBillData(null); // Reset previous bill data
    try {
      // Simulate fetching data from an API
      const response = await fetch(`http://localhost:3001/invoices?apartmentCode=${apartmentCode}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.length > 0) {
        setBillData(data[0]); // Assuming the API returns an array, and we take the first result
      } else {
        toast.error("Không tìm thấy hóa đơn cho mã căn hộ này.");
      }
    } catch (error) {
      console.error('Error fetching bill data:', error);
      toast.error("Có lỗi xảy ra khi tra cứu hóa đơn.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="space-y-2">
          <Badge className="px-3 py-1 text-sm text-blue-600" variant="secondary">
            Tra cứu
          </Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">Tra cứu hóa đơn tiền nước</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Nhập mã căn hộ để kiểm tra trạng thái thanh toán hóa đơn tiền nước.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <label htmlFor="apartmentCode" className="block text-sm font-medium text-gray-700">
            Mã căn hộ
          </label>
          <div className="flex space-x-2">
            <Input
              type="text"
              id="apartmentCode"
              value={apartmentCode}
              onChange={(e) => setApartmentCode(e.target.value)}
              placeholder="Nhập mã căn hộ"
              className="flex-grow"
            />
            <Button onClick={handleLookup} disabled={loading} className="bg-blue-600 hover:bg-blue-800">
              {loading ? "Đang tra cứu..." : "Tra cứu"}
            </Button>
          </div>
        </div>

        {billData && (
          <Card>
            <CardHeader>
              <CardTitle>Thông tin hóa đơn</CardTitle>
              <CardDescription>Chi tiết hóa đơn cho mã căn hộ: {billData.apartmentCode}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500">Mã căn hộ:</p>
                  <p className="font-medium">{billData.apartmentCode}</p>
                </div>
                <div>
                  <p className="text-gray-500">Tên chủ hộ:</p>
                  <p className="font-medium">{billData.householdName}</p>
                </div>
                <div>
                  <p className="text-gray-500">Kỳ thanh toán:</p>
                  <p className="font-medium">{billData.paymentPeriod}</p>
                </div>
                <div>
                  <p className="text-gray-500">Chỉ số cũ:</p>
                  <p className="font-medium">{billData.oldIndex}</p>
                </div>
                <div>
                  <p className="text-gray-500">Chỉ số mới:</p>
                  <p className="font-medium">{billData.newIndex}</p>
                </div>
                <div>
                  <p className="text-gray-500">Tổng số nước tiêu thụ:</p>
                  <p className="font-medium">{billData.totalConsumption}</p>
                </div>
                <div>
                  <p className="text-gray-500">Tổng tiền:</p>
                  <p className="font-medium">{billData.totalAmount} ₫</p>
                </div>
                <div>
                  <p className="text-gray-500">Trạng thái thanh toán:</p>
                  <p className={`font-medium ${billData.paymentStatus === 'Đã thanh toán' ? 'text-green-600' : 'text-red-600'}`}>
                    {billData.paymentStatus}
                  </p>
                </div>
                {billData.paymentDate && (
                  <div>
                    <p className="text-gray-500">Ngày thanh toán:</p>
                    <p className="font-medium">{billData.paymentDate}</p>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              {/* <Button variant="outline">In hóa đơn</Button> */}
            </CardFooter>
          </Card>
        )}
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold">Cần hỗ trợ thêm?</h2>
        <p className="mt-2 text-gray-500">
          Liên hệ với chúng tôi nếu bạn gặp bất kỳ vấn đề nào.
        </p>
        <div className="mt-4 space-x-4">
          <p className="text-gray-500">Hotline: 0123 456 789</p>
          <p className="text-gray-500">Email: support@waterbill.com</p>
        </div>
      </div>
    </div>
  );
};

export default LookupPage;

import { CheckCircle, FingerprintIcon as Faucet, Recycle, ShowerHead } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WaterTips() {
  const tips = [
    {
      icon: <Faucet className="h-10 w-10 text-blue-600" />,
      title: "Kiểm tra và sửa chữa rò rỉ nước",
      description:
        "Một vòi nước rò rỉ có thể lãng phí hàng ngàn lít nước mỗi năm. Kiểm tra và sửa chữa ngay khi phát hiện.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
      title: "Tắt vòi nước khi không sử dụng",
      description: "Đảm bảo tắt vòi nước khi đánh răng, rửa mặt hoặc rửa chén để tiết kiệm nước hiệu quả.",
    },
    {
      icon: <ShowerHead className="h-10 w-10 text-blue-600" />,
      title: "Sử dụng vòi sen tiết kiệm nước",
      description: "Vòi sen tiết kiệm nước có thể giảm lượng nước sử dụng đến 50% mà vẫn đảm bảo áp lực nước tốt.",
    },
    {
      icon: <Recycle className="h-10 w-10 text-blue-600" />,
      title: "Tái sử dụng nước khi có thể",
      description: "Nước từ máy giặt, rửa rau có thể được tái sử dụng để tưới cây hoặc lau sàn nhà.",
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">Các mẹo sử dụng nước hiệu quả</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {tips.map((tip, index) => (
        <Card key={index} className="border-sky-100 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            {tip.icon}
            <CardTitle className="text-lg text-blue-800">{tip.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600">{tip.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
    
  )
}


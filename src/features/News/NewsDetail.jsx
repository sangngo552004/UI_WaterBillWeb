import React from 'react';
import { useParams, Link } from 'react-router-dom';

const NewsDetail = () => {
    const { id } = useParams();

    const newsData = {
        1: { title: "Thông báo bảo trì hệ thống cấp nước", content: "Hệ thống cấp nước sẽ được bảo trì vào ngày 25/03/2025 từ 00:00 đến 06:00." },
        2: { title: "Khuyến mãi nhân dịp năm mới", content: "Nhận ngay ưu đãi 20% khi thanh toán hóa đơn nước qua MoMo từ 01/04/2025 đến 30/04/2025." },
        3: { title: "Thay đổi giá nước sinh hoạt từ tháng 4", content: "Giá nước sinh hoạt sẽ được điều chỉnh tăng 5% từ ngày 01/04/2025." }
    };

    const news = newsData[id];

    if (!news) {
        return <div className="text-center text-red-500 text-xl mt-10">Không tìm thấy tin tức.</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <Link to="/news" className="text-blue-500 mb-4 block hover:underline">&larr; Quay lại</Link>
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
                <p className="text-gray-800">{news.content}</p>
            </div>
        </div>
    );
};

export default NewsDetail;

import React, {useState, useEffect}from 'react';
import { useParams, Link } from 'react-router-dom';

const NewsDetailPage = () => {
    const { id } = useParams();
    const [newsDetail, setNewsDetail] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/news/${id}`)
          .then((res) => res.json())
          .then((data) => setNewsDetail(data));
      }, [id]);

    if (!newsDetail) {
        return <div className="text-center text-red-500 text-xl mt-10">Không tìm thấy tin tức.</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <Link to="/news" className="text-blue-500 mb-4 block hover:underline">&larr; Quay lại</Link>
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h1 className="text-3xl font-bold mb-4">{newsDetail.title}</h1>
                <p className="text-gray-800">{newsDetail.content}</p>
            </div>
        </div>
    );
};

export default NewsDetailPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { truncateContent } from "../../utils/helpers";

const NewsCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <h3 className="font-bold text-blue-600 mb-2">{item.title}</h3>
      <p className="text-gray-700">{truncateContent(item.content, 100)}</p>
      <Link to={`/news/${item.id}`} className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
        Xem thêm
      </Link>
    </div>
  );
};

export default NewsCard;
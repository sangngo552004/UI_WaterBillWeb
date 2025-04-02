import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewsList = () => {
    
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:3001/news');
                const data = await response.json();
                setNews(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
    
        fetchNews();}, []);
        
        

    return (
        <div>
            <div className="text-3xl font-bold text-blue-600 mb-6 text-center"><h1>Tất cả tin tức</h1></div>
            <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((data ) => (
                    <Link 
                        to={`/news/${data.id}`}
                        key={data.id}
                        className="block p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105"
                    >
                        <h2 className="text-xl font-bold mb-2 text-blue-600">{data.title}</h2>
                        <p className="text-gray-600 text-sm mb-4">{data.createDate}</p>
                        <p className="text-gray-800">{data.content}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NewsList;

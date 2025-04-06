import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Badge } from "@/components/ui/badge";
import {toast} from "sonner";


const NewsList = () => {
    
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:3001/news');
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
    
        fetchNews();}, []);
        
        

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <Badge className="px-3 py-1 text-sm text-blue-600" variant="secondary">
                        Tin tức
                      </Badge>
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">Tin tức</h1>
                      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                            Cập nhấtj các tin tức mới nhất về công ty cung cấp nước sạch.
                      </p>
                    </div>
            </div>
            
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

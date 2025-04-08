import React from 'react';
import NewsCard from '../../components/common/NewsCard';
import SectionHeader from '../../components/common/SectionHeader';
import useFetch from '../../hooks/useFetch'

const NewsListPage = () => {
    
    const { data: news, error } = useFetch('http://localhost:3001/news');
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <SectionHeader title="Tin tức mới nhất" description = "Cập nhật các tin tức mới nhất của công ty." />
            
            <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((data ) => (
                    <NewsCard key={data.id} item={data} />
                ))}
            </div>
        </div>
    );
};

export default NewsListPage;

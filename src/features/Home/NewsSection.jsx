import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NewsCard from '@/components/common/NewsCard';
import useFetch from '@/hooks/useFetch';



const NewsSection = () => {

    const { data: news, error } = useFetch('http://localhost:3001/news');
    if (error ) {
        return <div>Error: {error.message}</div>;
    }
  return (
    <section className="mb-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">Tin tức mới nhất</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.slice(0, 3).map((data) => (
          <NewsCard key={data.id} item={data} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link to="/news">
          <Button className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors">
            Xem tất cả tin tức
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;
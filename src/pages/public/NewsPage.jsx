import React from 'react';
import NewsList from '../../features/News/NewsList';
import { Routes, Route } from 'react-router-dom';
import NewsDetail from '../../features/News/NewsDetail';

const NewsPage = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<NewsList />} />
                <Route path=":id" element={<NewsDetail />} />
            </Routes>
        </div>
    );
};

export default NewsPage;

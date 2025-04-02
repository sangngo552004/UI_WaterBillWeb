import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-blue-100 relative">
            <img src="src\assets\images\company.webp" alt="Company" />
            <div className="absolute inset-0 flex items-center justify-end pr-8">
                <h1 className="text-5xl font-bold text-white  bg-opacity-50 p-4 rounded-xl">Công ty cổ phần <br></br><b>cấp nước PTIT</b></h1>
            </div>
        </div>
    );
};

export default Home;
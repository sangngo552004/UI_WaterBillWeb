import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng Nhập</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1">Tên đăng nhập</label>
                        <input type="text" className="w-full p-2 border rounded-lg" placeholder="Nhập tên đăng nhập" />
                    </div>
                    <div>
                        <label className="block mb-1">Mật khẩu</label>
                        <input type="password" className="w-full p-2 border rounded-lg" placeholder="Nhập mật khẩu" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4 hover:bg-blue-700">
                        Đăng Nhập
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
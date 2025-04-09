// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

// --- Giả lập dữ liệu người dùng ---
const mockUsers = {
  "user@example.com": {
    id: 1,
    name: "Người Dùng A",
    email: "user@example.com",
    password: "password123",
  },
  "sang@example.com": {
    id: 2,
    name: "Sang Nguyễn",
    email: "sang@example.com",
    password: "123",
  },
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  // Kiểm tra localStorage khi component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }catch (error ){
        console.error("Failed to initialize auth:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username, password , role) => {
    try {
      const response = await fetch("http://localhost:8080/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // Kiểm tra response
      if (!response.ok || data.code !== 1000 || !data.result.authenticated) {
        throw new Error(data.message || "Đăng nhập thất bại");
      }
      if (data.result.user.roles[0] !== role ){
        throw new Error("Bạn không có quyền truy cập vào trang này");
      }
      // Lấy token và user từ result
      const { token, user: userData } = data.result;

      setToken(token);
      setUser(userData);
      setIsAuthenticated(true);

      // Lưu vào localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      return userData; // Trả về thông tin user để component gọi login có thể sử dụng
    } catch (error) {
      console.log("vô catch")
      console.error("Login error:", error);
      throw error;
    }
  };
        

      

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const hasRole = (role) => {
    return user?.roles?.includes(role) || false;
  };

  const value = {
    user,
    token,
    isAuthenticated,
    isLoading,
    login,
    logout,
    hasRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
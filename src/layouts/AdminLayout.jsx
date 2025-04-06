import React from "react";

import { Outlet } from "react-router-dom";
import HeaderAdmin from "../components/HeaderAdmin";
import SideBarAdmin from "../components/SideBarAdmin";

const  AdminLayout = () => {
  return (
    <div className="min-h-screen flex">
      <SideBarAdmin />

      <div className="flex-1 flex flex-col">
            <HeaderAdmin />
            <main className="flex-1 p-6 bg-gray-50 overflow-auto">
                <Outlet />
            </main>
      </div>
    </div>
  )
}

export default AdminLayout;
import { React } from "react";

import HeaderUser from "../components/HeaderUser";
import SideBarUser from "../components/SideBarUser";
import { Outlet } from "react-router-dom";
import FooterUser from "../components/FooterUser";



 const UserLayout = ()  => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderUser />

      <div className="flex-1 flex">
            <SideBarUser />
            <main className="flex-1 p-6 bg-gray-50">
                <Outlet />
            </main>
      </div>

        <FooterUser />
    </div>
  )
}

export default UserLayout;
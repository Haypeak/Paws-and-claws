import React from 'react';
import AdminNavbar from "../Components/AdminNavbar/AdminNavbar";
import AdminSidebar from "../Components/AdminSidebar/AdminSidebar";
import AdminHeader from "../Components/AdminHeader/AdminHeader";
import AdminBoard from "../Components/AdminBoard/AdminBoard";

const InventoryPage = () => {
  return (
    <div>
      <AdminNavbar />
      <AdminSidebar />
      <AdminHeader />
      <AdminBoard />
    </div>
  )
}

export default InventoryPage

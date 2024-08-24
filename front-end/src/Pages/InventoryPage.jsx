// import React from 'react';
import AdminNavbar from "../Components/AdminInventory/AdminNavbar/AdminNavbar";
import AdminSidebar from "../Components/AdminInventory/AdminSidebar/AdminSidebar";
import AdminHeader from "../Components/AdminInventory/AdminHeader/AdminHeader";
import AdminBoard from "../Components/AdminInventory/AdminBoard/AdminBoard";
import Inventory from "../Components/AdminInventory/InventorySection/Inventory";
// import ProductManagement from "../Components/AdminInventory/ProductManagement/ProductManagement";

const InventoryPage = () => {
  return (
    <div>
      <AdminNavbar />
      <AdminSidebar />
      <AdminHeader />
      <AdminBoard />
      <Inventory/>
      {/* <ProductManagement/> */}
    </div>
  )
}

export default InventoryPage

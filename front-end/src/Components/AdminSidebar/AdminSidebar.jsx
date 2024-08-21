import React from "react";
import "./AdminSidebar.css";
import menu from "../../assets/admin-menu.png";
import user from "../../assets/user.png";
import mail from "../../assets/mail.png";
import calender from "../../assets/Calenderr.png";
import signOut from "../../assets/sign-out.png";
import rightArrow from "../../assets/greater-than.png"


const AdminSidebar = () => {
    return (
        <aside className='sidebar'>
            <ul>
                <ul className='admin-menu'>
                    <a href=''><img src={menu} alt=''/><span>Dashboard</span><img src={rightArrow} alt='' /></a>
                </ul>
                <ul className='user'><a href=''>
                    <img src={user} alt='' /><span>User</span><img src={rightArrow} alt='' /></a>
                </ul>
                <ul className='mail'>
                    <a href=''><img src={mail} alt='' /><span>Message</span><img src={rightArrow} alt='' /></a>
                </ul>
                <ul className='calender' >
                    <a href=''><img src={calender} alt='' /><span>Inventory</span><img src={rightArrow} alt='' /></a>
                </ul>
                <ul className='signOut'>
                    <a href=''><img src={signOut} alt='' /><span>SIGN OUT</span><img src={rightArrow} alt='' /></a>
                </ul>
            </ul>
        </aside>
    )
}

export default AdminSidebar

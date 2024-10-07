import React from "react";
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Menu1</li>
                        <li className="sidebarListItem">Menu2</li>
                        <li className="sidebarListItem">Menu3</li>
                    </ul>
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Menu1</li>
                        <li className="sidebarListItem">Menu2</li>
                        <li className="sidebarListItem">Menu3</li>
                    </ul>
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Menu1</li>
                        <li className="sidebarListItem">Menu2</li>
                        <li className="sidebarListItem">Menu3</li>
                    </ul>
                </div>
            </div>
        </div>)
}
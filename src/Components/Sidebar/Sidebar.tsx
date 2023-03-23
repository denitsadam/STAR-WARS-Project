import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import './assets/css/sidebar.css'

const Sidebar = (props: { children: ReactNode }) => {
    const { children } = props;
    return <div className="sidebar">
        <ul>{children}</ul>
    </div>
}

export const SidebarItem = (props: { path: string, children: ReactNode }) => {
    const location = useLocation();
    const { path, children } = props;
    return <li>
        <Link
            className={location.pathname.split("/").filter(itm => itm).pop() === path ? 'active' : ''}
            to={path}>{children}</Link>
    </li>
}

export default Sidebar;
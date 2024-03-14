import React from "react";
import CollapseNavbar from "./components/Navbar/CollapseNavbar";
import { Outlet } from "react-router-dom";


function Layout({...props}){
    return(
        <>
            <CollapseNavbar {...props} />
            <main>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;
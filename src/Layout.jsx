import React from "react";
import CollapseNavbar from "./components/Navbar/CollapseNavbar";
import { Outlet } from "react-router-dom";


function Layout(){
    return(
        <>
            <CollapseNavbar />
            <main>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;
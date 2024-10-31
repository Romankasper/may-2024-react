import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../componennts/menu/Menu";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
            <footer>
                <hr/>
                foter is here
            </footer>
        </div>
    );
};

export default MainLayout;
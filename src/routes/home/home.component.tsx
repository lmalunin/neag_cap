import Directory from "../../components/directory/directory.component";
import React from "react";
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Outlet/>
            <Directory/>
        </div>
    );

}

export { Home };
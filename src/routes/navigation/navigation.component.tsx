import {Link, Outlet} from "react-router-dom";
import React from "react";

const Navigation = () => {
    return (
            <>
                <div className='navigation'>
                    <Link className='logo-container' to='/'>
                        <div>Logo</div>
                    </Link>

                    <div className='links-container'>
                        <Link className='nav-link' to='/shop'>Shop</Link>
                    </div>
                </div>
                <Outlet/>
            </>
    );
}

export {Navigation};
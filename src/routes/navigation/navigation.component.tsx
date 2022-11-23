import {Link, Outlet} from "react-router-dom";
import React, {useContext} from "react";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.styles.scss';
import {UserContext} from "../../components/contexts/user.context";
import {signOutUser} from "../../utils/firebase/frebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {

    const {currentUser} = useContext(UserContext);

    return (
            <>
                <div className='navigation'>
                    <Link className='logo-container' to='/'>
                        <CrwnLogo className='logo'></CrwnLogo>
                    </Link>
                    <div className='nav-links-container'>
                        <Link className='nav-link' to='/shop'>Shop</Link>
                        {
                            currentUser
                                    ? (<span className='nav-link' onClick={signOutUser}>Sign Out</span>)
                                    : (<Link className='nav-link' to='/auth'>Sign in</Link>)
                        }
                        <CartIcon/>
                    </div>
                    <CartDropdown/>
                </div>
                <Outlet/>
            </>
    );
}

export {Navigation};
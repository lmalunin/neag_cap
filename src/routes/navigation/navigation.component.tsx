import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import React from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { selectCartIsOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';

import { signOutUser } from "../../utils/firebase/frebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);
    //const { isCartOpen } = useContext(CartContext);
    const isCartOpen = useSelector(selectCartIsOpen);

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo'></CrwnLogo>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>Shop</NavLink>
                    {
                        currentUser
                            ? (<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>)
                            : (<NavLink to='/auth'>Sign in</NavLink>)
                    }
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </>
    );
}

export { Navigation };
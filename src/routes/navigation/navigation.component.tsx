import { Link, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';
import { UserContext } from "../../components/contexts/user.context";
import { signOutUser } from "../../utils/firebase/frebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../components/contexts/cart.context";

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

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
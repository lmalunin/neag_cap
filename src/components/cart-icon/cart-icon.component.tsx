import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartIsOpen } from "../../store/cart/cart.selector";
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const CartIcon = () => {

    const dispatch = useDispatch();
    const { cartCount } = useContext(CartContext);

    const isCartOpen = useSelector(selectCartIsOpen);

    const toggleIsCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;
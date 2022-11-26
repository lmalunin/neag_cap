import './cart-dorpdown.styles.scss';
import ButtonComponent from "../button/buttonComponent";
import {useContext} from "react";
import {CartContext} from "../contexts/cart.context";

const CartDropdown = () => {

    const {isCartOpen} = useContext(CartContext);

    return (
            <div className='cart-dropdown-container'>
                <div className='cart-items'></div>
                <ButtonComponent buttonType=''>CHECKOUT</ButtonComponent>
            </div>
    )
}

export default CartDropdown;
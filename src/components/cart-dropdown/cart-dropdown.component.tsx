import ButtonComponent, { BUTTON_TYPE_CLASSES } from "../button/buttonComponent";
import CartItemComponent from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { useNavigate } from "react-router-dom"
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dorpdown.styles";

const CartDropdown = () => {

    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();
    const onClickHandler = () => {
        setIsCartOpen(false);
        return navigate(`/checkout`);
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length
                        ? cartItems.map(item => <CartItemComponent key={item.id} cartItem={item}/>)
                        : (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartItems>
            <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.inverted}
                             onClick={onClickHandler}>CHECKOUT</ButtonComponent>
        </CartDropdownContainer>
    )
}

export default CartDropdown;
import './cart-dorpdown.styles.scss';
import ButtonComponent from "../button/buttonComponent";
import CartItem from "../cart-item/cart-item.component";
import {useContext} from "react";
import {CartContext} from "../contexts/cart.context";
import {useNavigate} from "react-router-dom"

const CartDropdown = () => {

    const {cartItems, setIsCartOpen} = useContext(CartContext);
    const navigate = useNavigate();
    const onClickHandler = () => {
        setIsCartOpen(false);
        return navigate(`/checkout`);
    }

    return (
            <div className='cart-dropdown-container'>
                <div className='cart-items'>
                    {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
                </div>
                <ButtonComponent buttonType='' onClick={onClickHandler}>CHECKOUT</ButtonComponent>
            </div>
    )
}

export default CartDropdown;
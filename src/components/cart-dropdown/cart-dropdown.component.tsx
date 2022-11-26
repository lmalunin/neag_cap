import './cart-dorpdown.styles.scss';
import ButtonComponent from "../button/buttonComponent";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
    return (
            <div className='cart-dropdown-container'>
                <div className='cart-items'>
                    {[].map(item => <CartItem cartItem={item}/>)}
                </div>
                <ButtonComponent buttonType=''>CHECKOUT</ButtonComponent>
            </div>
    )
}

export default CartDropdown;
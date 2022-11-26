import './cart-dorpdown.styles.scss';
import ButtonComponent from "../button/buttonComponent";

const CartDropdown = () => {
    return (
            <div className='cart-dropdown-container'>
                <div className='cart-items'></div>
                <ButtonComponent buttonType=''>CHECKOUT</ButtonComponent>
            </div>
    )
}

export default CartDropdown;
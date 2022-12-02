import './checkout-list.styles.scss';
import {useContext} from "react";
import {CartContext} from "../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout.item";

const CheckoutList = () => {

    const {cartItems} = useContext(CartContext);

    return (
            <div>
                {
                    cartItems.length > 0 ? cartItems.map(item => <CheckoutItem key={item.id}
                                                                               cartItem={item}/>) : 'no items'
                }
            </div>
    )
}

export default CheckoutList;
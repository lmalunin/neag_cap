import './checkout-list.styles.scss';
import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout.item";

const CheckoutListComponent = () => {

    const { cartItems, totalPrice, setTotalPrice } = useContext(CartContext);

    useEffect(() => {
        const totalValue = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        setTotalPrice(totalValue);
    }, [cartItems]);

    return (
        <>
            <div className={'naming__wrapper'}>
                <div>Product</div>
                <div>Description</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Remove</div>
            </div>

            {
                cartItems.length > 0 ? cartItems.map(item => <CheckoutItem key={item.id}
                                                                           cartItem={item}/>) : 'no items'
            }

            <div className={'total'}>Total: {totalPrice}</div>
        </>
    )
}

export default CheckoutListComponent;
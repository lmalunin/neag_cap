import './checkout-list.styles.scss';
import { useSelector } from "react-redux";
import { selectCartItems, selectTotalPrice } from "../../store/cart/cart.selector";
import CheckoutItem from "../checkout-item/checkout.item";

const CheckoutListComponent = () => {

    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotalPrice);

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
// html дингбаты https://unicode-table.com/ru/blocks/dingbats/
// html symbols https://www.htmlsymbols.xyz/number-symbols

import './checkout-item.styles.scss';
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeAllSelectedItemsFromCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    return (
        <div className={'wrapper'}>
            <div>
                <img src={cartItem.imageUrl} alt={`${cartItem.name}`}/>
            </div>
            <div>{cartItem.name}</div>
            <div style={{ cursor: "pointer" }}
                 onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}>&#10094;</div>
            <div>{cartItem.quantity} x ${cartItem.price}</div>
            <div style={{ cursor: "pointer" }}
                 onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>&#10095;</div>
            <div>{cartItem.quantity * cartItem.price}$</div>
            <div style={{ cursor: "pointer" }}
                 onClick={() => dispatch(removeAllSelectedItemsFromCart(cartItems, cartItem))}>
                &#10062;
            </div>
        </div>
    )
}

export default CheckoutItem;
// html дингбаты https://unicode-table.com/ru/blocks/dingbats/
// html symbols https://www.htmlsymbols.xyz/number-symbols

import './checkout-item.styles.scss';
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {

    const { addItemToCart, removeItemFromCart, removeAllSelectedItemsFromCart } = useContext(CartContext);

    return (
        <div className={'wrapper'}>
            <div>
                <img src={cartItem.imageUrl} alt={`${cartItem.name}`}/>
            </div>
            <div>{cartItem.name}</div>
            <div style={{ cursor: "pointer" }} onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
            <div>{cartItem.quantity} x ${cartItem.price}</div>
            <div style={{ cursor: "pointer" }} onClick={() => addItemToCart(cartItem)}>&#10095;</div>
            <div>{cartItem.quantity * cartItem.price}$</div>
            <div style={{ cursor: "pointer" }}
                 onClick={() => removeAllSelectedItemsFromCart(cartItem)}>
                &#10062;
            </div>
        </div>
    )
}

export default CheckoutItem;
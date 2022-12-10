// html дингбаты https://unicode-table.com/ru/blocks/dingbats/

import './checkout-item.styles.scss';
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {

    const { addItemToCart, removeItemFromCart, removeAllSelectedItemsFromCart } = useContext(CartContext);

    return (
        <div className={'checkout-item-container'}>
            <div className={'image-container'}>
                <img src={cartItem.imageUrl} alt={`${cartItem.name}`}/>
            </div>
            <span className={'name'}>{cartItem.name}</span>
            <span style={{ cursor: "pointer" }} onClick={() => removeItemFromCart(cartItem)}>&#10094;</span>

            <span className={'quantity'}>{cartItem.quantity} x ${cartItem.price}</span>
            <span style={{ cursor: "pointer" }} onClick={() => addItemToCart(cartItem)}>&#10095;</span>
            <span className={'price'}>{cartItem.quantity * cartItem.price}$</span>
            <div className={'remove-button'}
                 style={{ cursor: "pointer" }}
                 onClick={() => removeAllSelectedItemsFromCart(cartItem)}>
                &#10062;
            </div>
        </div>
    )
}

export default CheckoutItem;
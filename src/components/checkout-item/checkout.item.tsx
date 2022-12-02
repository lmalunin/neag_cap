import './checkout-item.styles.scss';
import {useContext} from "react";
import {CartContext} from "../contexts/cart.context";

const CheckoutItem = ({cartItem}) => {

    const {addItemToCart, removeItemFromCart, removeAllSelectedItemsFromCart} = useContext(CartContext);

    return (
            <div className={'wrapper'}>
                <img src={cartItem.imageUrl} alt={`${cartItem.name}`}/>
                <div className={''}>
                    <span className={''}>{cartItem.name}</span>
                </div>
                <div className={'addRemove'}>
                    <div style={{cursor: "pointer"}} onClick={() => removeItemFromCart(cartItem)}>{'<'}</div>
                    <div>{cartItem.quantity} x ${cartItem.price}</div>
                    <div style={{cursor: "pointer"}} onClick={() => addItemToCart(cartItem)}>{'>'}</div>

                </div>
                <div>{cartItem.quantity * cartItem.price}$</div>
                <div style={{cursor: "pointer"}} onClick={() => removeAllSelectedItemsFromCart(cartItem)}>Х</div>
            </div>
    )
}

export default CheckoutItem;
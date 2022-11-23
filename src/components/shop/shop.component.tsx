import {useContext} from "react";
import {ShopContext} from "../contexts/shop.context";

const ShopComponent = () => {
    const {products} = useContext(ShopContext);
    return (
            <div>
                {products.map(({id, name}) => (
                        <div key={id}>
                            <h1>{name}</h1>
                        </div>
                ))}
            </div>
    )
}

export default ShopComponent;
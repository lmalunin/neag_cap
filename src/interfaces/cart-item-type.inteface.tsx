import { CategoryItem } from "./category-item.interface";


export type CartItem = CategoryItem & {
    quantity: number;
};
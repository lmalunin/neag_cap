import { CategoryItem } from "./category-item.interface";


export type CartItemType = CategoryItem & {
    quantity: number;
};
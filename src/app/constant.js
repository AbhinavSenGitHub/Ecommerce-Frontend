export const ITEMS_PER_PAGE = 12;
export function discountPrice (item){
    console.log("item:- ", Math.round(item.price*(1-item.discountPercentage/100), 2));
    return Math.round(item.price*(1-item.discountPercentage/100), 2);
}
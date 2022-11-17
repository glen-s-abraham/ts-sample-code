import { BaseItem, Item } from "./item.interface";


export const instanceOfItem=(item:any):item is Item=>{
    let condition:boolean = 'id' in item && 'name' in item && 'price' in item && 'description' in item && 'image' in item;
    return condition;
}

export const instanceOfBaseItem=(item:any):item is BaseItem=>{
    let condition:boolean = 'name' in item && 'price' in item && 'description' in item && 'image' in item;   
    return condition;
}
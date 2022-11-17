import {create,find,findAll,remove,update} from './items.service';
import {instanceOfBaseItem,instanceOfItem} from './item.assertions';
export const get=(id:number|null=null)=>{
    if(id===null)
        return findAll();
    return find(id);    
}

export const post = (item:any)=>{
   if(!instanceOfBaseItem(item)) throw new TypeError('item not of Type BaseItem');
   return create(item);
}

export const put = (id:number,item:any)=>{
    if(!instanceOfBaseItem(item)) throw new TypeError('item not of Type BaseItem');
    return update(id,item);
}

export const del = (id:number)=>{
   return remove(id);
}



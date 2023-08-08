import { atom, computed } from 'nanostores';
import type { Dog } from '../types/dogs';

export const listDogCart = atom<Dog[]>([]);
export const add = (item: Dog) => {
    const cartListTemp = [...listDogCart.get()];
    const index = cartListTemp.findIndex(c => c.id == item.id);
    console.log(index);
    if(index == -1){
        cartListTemp.push({
            ...item,
            qty: 1
        });
    }
    else{
        cartListTemp[index] = {
            qty: Number(cartListTemp[index]?.qty) + 1,
            ...cartListTemp[index]
        }
    }

    listDogCart.set(cartListTemp);
    localStorage.setItem('carts', JSON.stringify(cartListTemp));
}
export const remove = (id: Number|string) => {
    let cartListTemp = [...listDogCart.get()];
    cartListTemp = cartListTemp.filter(c => c.id != id);
    listDogCart.set(cartListTemp);
    localStorage.setItem('carts', JSON.stringify(listDogCart.get())); 
}
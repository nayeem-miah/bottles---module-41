const getStorageCart = () =>{
    const storageCardString= localStorage.getItem('cart')
    if(storageCardString){
        return JSON.parse(storageCardString);

    }
    return [];
}

const saveCartToLS= cart =>{
    const cartStringfied=JSON.stringify(cart);
    localStorage.setItem(' cart',cartStringfied);
}
const addToLS = id =>{
    const cart =getStorageCart();
    cart.push(id)
    //  save to localStorage
    saveCartToLS(cart)
}
const removeFromLS = id =>{
    const cart = getStorageCart();
    // removing every id 
    const remaining = cart.filter(idx =>idx !== id);
    saveCartToLS(remaining);
}

export {addToLS, getStorageCart, removeFromLS}
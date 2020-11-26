export const AddToCart = (favouriteItems, cartItemToAdd) => {
    const existingCartItem = favouriteItems.find(cartitem => cartitem.id === cartItemToAdd.id)

    

if (existingCartItem){
    return  favouriteItems.map(cartitem => cartitem.id === cartItemToAdd.id ?
        {...cartitem, quantity: cartitem.quantity + 1}
         :  cartitem
    )

        
}
    


  return [...favouriteItems, {...cartItemToAdd,quantity:1}]

}




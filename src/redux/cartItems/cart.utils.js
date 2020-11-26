export const AddToCart = (CartItems, cartItemToAdd) => {
    const existingCartItem = CartItems.find(cartitem => cartitem.id === cartItemToAdd.id)


if (existingCartItem){
    return CartItems.map(cartitem => cartitem.id === cartItemToAdd.id ?
        {...cartitem, quantity: cartitem.quantity + 1}
        : cartitem
        )
}

return [...CartItems, {...cartItemToAdd,quantity:1}]

}


export const removeFromCartItem = (CartItems , RemoveCartItem) => {
    const existingcartItem = CartItems.find(cartItem => cartItem.id === RemoveCartItem.id 
         )
 
         if (existingcartItem.quantity === 1){
          return   CartItems.filter(cartItem => cartItem.id !== RemoveCartItem.id)
          }
 
 
         return CartItems.map(cartItem => 
             cartItem.id === RemoveCartItem.id ?
         { ...cartItem , quantity: cartItem.quantity - 1}
         :cartItem 
          )
       
 
 }


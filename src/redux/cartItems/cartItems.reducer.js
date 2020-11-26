import CartType from './cartItems.type'
import {AddToCart} from './cart.utils'
import { removeFromCartItem } from "./cart.utils";


const INITIAL_STATE = {
    hidden:true,
    CartItems :[]
}
    




const CartReducer =(state=INITIAL_STATE, action)=> {
 switch (action.type) {
     case CartType.TOOGLE_NAV:
        
     return{
        ...state,
         hidden:!state.hidden
        }

   

        case CartType.Add_Items:
            return {
                ...state,
                CartItems:AddToCart(state.CartItems, action.payload)
            }
         
            case CartType.REMOVE_ITEM:
            return {
                ...state,
                CartItems:removeFromCartItem(state.CartItems, action.payload)
            }
       
            case CartType.CLEAR_CART_ITEM:
                return{
                    ...state,
                    CartItems: state.CartItems.filter(
                        cartItem => cartItem.id !== action.payload.id)
                }; 

 
     default:
         return state;
 }
}

export default CartReducer;
import { TOggleNav } from "../cartItems/cartItems.action"
import FavouriteTypes from './favourite.type'

export const AddTOFavouriteCart = item =>({
    type: FavouriteTypes.FAVOURITE_ITEMS,
    payload: item
})

export const toggleNav = ()=>({
    type: FavouriteTypes.TOGGLE_NAV,

})

export const RemoveItem = item =>({
    type: FavouriteTypes.REMOVE_ITEM,
    payload: item
})
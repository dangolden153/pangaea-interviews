import {AddTOFavouriteCart} from './favourite.action'
import FavouriteTypes from './favourite.type'
import {AddToCart} from './fav.utils'

const INITIAL_STATE = {
    nav: true,
    favouriteItems :[]
   
}

const FavouriteReducer = (state=INITIAL_STATE,action) =>{

    switch (action.type) {
        case FavouriteTypes.FAVOURITE_ITEMS:
            return{
                ...state,
                favouriteItems: AddToCart(state.favouriteItems, action.payload)
            }

            case FavouriteTypes.TOGGLE_NAV:
                return{
                    ...state,
                    nav: !state.nav
                }

            case FavouriteTypes.REMOVE_ITEM:
                return{
                    ...state,
                    favouriteItems: state.favouriteItems.filter(favItem => favItem.id !== action.payload.id )
                }    
    
        default:
           return state
    }

}
export default FavouriteReducer
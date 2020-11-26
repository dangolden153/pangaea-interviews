import {combineReducers} from 'redux'
import ShopReducer from '../redux/shop/shop.reducer'
import CartReducer from '../redux/cartItems/cartItems.reducer'
import directoryReducer from '../redux/shop/directoryImg-Data'
import FavouriteReducer from '../redux/favourite/favourite.redux'
import HideReducer from '../redux/hide/hide.reducer'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'root',
    storage,
    whitelist:['Cart','Favourite']
}
const rootReducer = combineReducers({
    Shop:ShopReducer,
    Cart:CartReducer,
    directory:directoryReducer,
    Favourite:FavouriteReducer,
    Hide: HideReducer
    
})

export default persistReducer(persistConfig,rootReducer);

import {combineReducers} from 'redux'

import CartReducer from './cartReducer/cart.redux'

 const rootReducer =combineReducers({
    cart: CartReducer
    })


    export default rootReducer

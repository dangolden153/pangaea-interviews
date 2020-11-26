import ShopData from './shop-data'
import ImgData from './img-collection'


const INITIAL_STATE = {
    collections : ShopData,
    ImgCollections:ImgData
}

const ShopReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
            default:
            return state;
    }
}

export default ShopReducer;
import {createSelector} from 'reselect'

const selectShop = state => state.Shop 

export const selectShopCollections = createSelector(
    [selectShop],
    Shop=> Shop.collections

    )

  


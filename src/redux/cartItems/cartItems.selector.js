import {createSelector} from 'reselect'

const selectCart = state => state.Cart

export const SelectCartitems = createSelector(
    [selectCart],
    Cart => Cart.CartItems 
)

const selectToggleNav = createSelector(
    [selectCart],
    Cart => Cart.hidden
)

 export const selectAdditems = createSelector(
    [selectCart],
    Cart => Cart.CartItems

 )

 export const selectHidden = createSelector(
    [selectCart],
    Cart => Cart.hidden

 )

 export const selectHide = createSelector(
    [selectCart],
    Cart => Cart.hide

 )

 export const SelectItemCount = createSelector(
    [SelectCartitems],
    CartItems=> CartItems.reduce((accumulatedQuantity,CartItems) =>
     accumulatedQuantity + CartItems.quantity, 0)
 )

 export const SelectTotalCount = createSelector(
    [SelectCartitems],
    CartItems=> CartItems.reduce((accumulatedQuantity,CartItems) =>
     accumulatedQuantity + CartItems.quantity*CartItems.price, 0)
 )
export default selectToggleNav;
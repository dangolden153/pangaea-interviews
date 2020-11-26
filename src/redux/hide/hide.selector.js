import { createSelector} from 'reselect'

const selecthide = state => state.Hide

export const hideSelector = createSelector(
    [selecthide],
    Hide => Hide.hide
)
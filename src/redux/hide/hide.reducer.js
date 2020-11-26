import {Hidetype} from './hide.type'

const INITIAL_STATE = {
    hide: true
    
   
}

const HideReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type){

        case Hidetype.HIDE_NAV:
            return{
                ...state,
                hide: !state.hide
            }
            default:
                return state
    }

    
}

export default HideReducer
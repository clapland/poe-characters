import {FETCH_LADDER} from '../actions/types';

export default(state = {}, action) => {
    switch(action.type) {
        case FETCH_LADDER:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
import {FETCH_CHARACTER} from '../actions/types';

export default(state = {}, action) => {
    switch(action.type) {
        case FETCH_CHARACTER:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
import pathofexile from '../apis/pathofexile';
import { FETCH_LADDER } from './types';

export const fetchLadder = () => {
    return async (dispatch) => {
        const response = await pathofexile.get('ladders/Betrayal')

        dispatch({type: FETCH_LADDER, payload: response.data})
    }
}
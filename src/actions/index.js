import ladder from '../apis/ladder';
import character from '../apis/character';
import { FETCH_LADDER, FETCH_CHARACTER } from './types';

export const fetchLadder = () => {
    return async (dispatch) => {
        const response = await ladder.get('ladders/Betrayal')

        dispatch({type: FETCH_LADDER, payload: response.data})
    }
}

export const fetchCharacter = (characterName, account) => {
    return async (dispatch) => {
        let config = {
            headers: {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded',
                'Content-Type': 'application/www-form-urlencoded'
            }
        }

        const response = await character.post(`get-items?accountName=${account}&character=${characterName}`, config);
        dispatch({type: FETCH_CHARACTER, payload: response.data})
    }
}
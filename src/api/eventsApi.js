import { URL } from '../constants/url';

export const getEvents = (place_id,token) => {
    return fetch(
        `${URL}places/${place_id}/events/`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${ token }`
            }
        }
    )
};
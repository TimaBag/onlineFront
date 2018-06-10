import { URL } from '../constants/url';

export const getPlaces = (token) => {
    return fetch(
        `${URL}places/`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
    )
};

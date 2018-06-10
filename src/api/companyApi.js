import { URL } from '../constants/url';

export const getCompany = (token) => {
    return fetch(
        `${URL}companies/`,
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
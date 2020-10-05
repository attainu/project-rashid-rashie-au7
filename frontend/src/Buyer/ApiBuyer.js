import  {API} from '../config/config';
<<<<<<< HEAD
import queryString from 'query-string'


export const getChkoutPrdts = params => {
    const query = queryString.stringify(params)
    return fetch(`${API}/checkout/?${query}`, {
        method: 'GET'
    })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const postChkoutPrdts= params =>{
    const query = queryString.stringify(params)
    return fetch(`${API}/checkout/?${query}`, {
        method: 'POST'
    })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getOrderList = params => {
    const query = queryString.stringify(params)
    return fetch(`${API}/myorders/?${query}`, {
        method: 'GET'
    })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getBuyerProfile = (buyerid,token) => {
    console.log('user===',buyerid, "token=== ",token )
    return fetch(`${API}/profile/${buyerid}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateBuyer = (userId, token,user) => {
    return fetch(`${API}/profile/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
=======


>>>>>>> 388bae76a3815e77450f37eeaa82bd065cc513fe

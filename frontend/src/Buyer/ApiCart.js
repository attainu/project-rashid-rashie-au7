import  {API} from '../config/config';
import queryString from 'query-string'

export const addCart = params=> {
    const query = queryString.stringify(params)
    return fetch(`${API}/addcart/?${query}`, {
        method: "POST",
        headers: {
            Accept:"application/json",
            "Content-Type": "application/json" 
        },
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
};


export const getCart = params => {
    const query = queryString.stringify(params)
    return fetch(`${API}/mycart/?${query}`, {
        method: 'GET'
    })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .catch(err => console.log(err));
};


export const addWishlist = params=> {
    const query = queryString.stringify(params)
    return fetch(`${API}/mywishlist/?${query}`, {
        method: "POST",
        headers: {
            Accept:"application/json",
            "Content-Type": "application/json" 
        }, 
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
};


export const getWishlist = params => {
    const query = queryString.stringify(params)
    return fetch(`${API}/wishlist/?${query}`, {
        method: 'GET'
    })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .catch(err => console.log(err));
};


export const removeCart = params => {
    const query = queryString.stringify(params)
    return fetch(`${API}/removecart/?${query}`, {
        method: 'GET'
    })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeWishlist = params => {
    const query = queryString.stringify(params)
    return fetch(`${API}/removewishlist/?${query}`, {
        method: 'GET'
    })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateCart = params => {
    const query = queryString.stringify(params)
    return fetch(`${API}/updatecart/?${query}`, {
        method: 'POST'
    })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .catch(err => console.log(err));
};



import  {API} from '../config/config';
import queryString from 'query-string'




export const createProduct = (userid,token,product) => {
    return fetch(`${API}/addproduct/${userid}`, {
        method: "POST",
        headers: {
            Accept:"application/json",
            "Content-Type": "application/json",
            Authorization:  `Bearer ${token}`
        },
        body: JSON.stringify(product)
       
    })
    .then(response =>{
        console.log('prdtttt', JSON.stringify(product))
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
};

export const getProducts = (sellerid,token) => {
    console.log('user===',sellerid, "token=== ",token )
    return fetch(`${API}/products/${sellerid}`, {
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

export const getSingleProduct = (prdtid,userid,token) => {
    console.log('user===',prdtid, "token=== ",token )
    return fetch(`${API}/updateproduct/${userid}/${prdtid}`, {
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

export const getSellerProfile = (sellerid,token) => {
    console.log('user===',sellerid, "token=== ",token )
    return fetch(`${API}/sellerProfile/${sellerid}`, {
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

export const updateSeller = (userId, token,user) => {
    return fetch(`${API}/sellerprofile/${userId}`, {
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

<<<<<<< HEAD
export const getSales = (sellerid,token,params) => {
    const query = queryString.stringify(params)
    console.log('query==',query,)
    return fetch(`${API}/products/${sellerid}?${query}`, {
        method: 'GET',
=======

export const updateProduct = (prdtid,userid,token,user) => {
    return fetch(`${API}/updateproduct/${userid}/${prdtid}`, {
        method: "POST",
>>>>>>> 388bae76a3815e77450f37eeaa82bd065cc513fe
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
<<<<<<< HEAD
        }
=======
        },
        body: JSON.stringify(user)
>>>>>>> 388bae76a3815e77450f37eeaa82bd065cc513fe
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

<<<<<<< HEAD
export const updateProduct = (prdtid,userid,token,user) => {
    return fetch(`${API}/updateproduct/${userid}/${prdtid}`, {
=======
export const deleteProduct = (prdtid,userid, token,user) => {
    return fetch(`${API}/deleteproduct/${userid}/${prdtid}`, {
>>>>>>> 388bae76a3815e77450f37eeaa82bd065cc513fe
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

<<<<<<< HEAD
export const deleteProduct = (prdtid,userid, token,user) => {
    return fetch(`${API}/deleteproduct/${userid}/${prdtid}`, {
        method: "POST",
=======
export const getSales = (sellerid,token,sdate,edate) => {

    return fetch(`${API}/salesreport/${sellerid}?sdate=${sdate}&edate=${edate}`, {
        method: 'GET',
>>>>>>> 388bae76a3815e77450f37eeaa82bd065cc513fe
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
<<<<<<< HEAD
        },
        body: JSON.stringify(user)
=======
        }
>>>>>>> 388bae76a3815e77450f37eeaa82bd065cc513fe
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
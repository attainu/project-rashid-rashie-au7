import  {API} from '../config/config';



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
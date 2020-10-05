import React,{useState,useEffect} from 'react';
import Layout from '../core/Layout';
import {isAuthenticate} from '../auth'
import {getProducts} from './ApiSeller'
import {Link} from 'react-router-dom'
import PrdtCard from  '../Seller/PrdtCard';


const SellerHome = () => {
    const [products,setProduct] = useState([])
    const [error,setError] = useState(false)
    const {user,token} = isAuthenticate();

    const loadProducts = () => {
        getProducts(user.userid,token).then(data => {
            if(data.error){
                setError(data.error)
            } else{
                setProduct(data)
            }            
        })
    }

    useEffect(() => {
        loadProducts()
        
    }, []);

    
    const userLinks =() => {
        return (
            <div>
                <h4 className="card-header">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                         <Link className = "nav-link" to="/addproduct"> Add Product </Link>
                    </li>
                    <li className="list-group-item">
                         <Link className = "nav-link" to="/updateproduct"> Update Product </Link>
                    </li>
                    <li className="list-group-item">
                         <Link className = "nav-link" to="/salesreport"> Sales Report </Link>
                    </li>
                    <li className="list-group-item">
                         <Link className = "nav-link" to="/stockreport"> Stock Report </Link>
                    </li>
                    <li className="list-group-item">
                         <Link className = "nav-link" to="/sellerprofile"> My Profile </Link>
                    </li>
                </ul>
            </div>

        )
    };

    const userInfo = () =>{
        return (
            <div className="card mb-5">
                <h3 className ="card-header">Usr iNfo</h3>
                <ul className="list-group">
                    <li className="list-group-item">{user.name}</li>
                    <li className="list-group-item">{user.email}</li>
                    <li className="list-group-item">{user.usertype === 1 ? 'Buyer' : 'Seller'}</li>
                </ul>
            </div>
        )  
    };

    return (
        <Layout description={`Hi, ${user.name}`}>
            <div className="row">
                <div className="clo-3">
                    {userLinks()}
                </div>
                <div className="col-9">
                    {userInfo()}
                </div>    
                <div className="container">
                <div className="row "> 
                    {products.map((product,i) =>(
                        <PrdtCard key={i} product={product} />
                    ))}
                </div></div>  
            </div>       
        </Layout>
    )
}

export default SellerHome
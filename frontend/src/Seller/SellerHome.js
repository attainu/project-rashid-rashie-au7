import React from 'react';
import Layout from '../core/Layout';
import {isAuthenticate} from '../auth'
import {Link} from 'react-router-dom'


const SellerHome = () => {
    const {user:{name,email,usertype}} = isAuthenticate()

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
                         <Link className = "nav-link" to="/profile"> My Profile </Link>
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
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{usertype === 1 ? 'Buyer' : 'Seller'}</li>
                </ul>
            </div>
        )  
    };

    return (
        <Layout description={`Hi, ${name}`}>
            <div className="row">
                <div className="clo-3">
                    {userLinks()}
                </div>
                <div className="col-9">
                    {userInfo()}
                </div>    
            </div>       
        </Layout>
    )
}

export default SellerHome
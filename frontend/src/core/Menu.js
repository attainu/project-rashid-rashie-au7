import React, {Fragment} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {signout,isAuthenticate } from '../auth'

const isActive =(history, path)=> {
    if(history.location.pathname === path){
        return {color: '#ff9900'}
    } else{
        return {color: '#ffffff'}
    }  
}  
const {user} = isAuthenticate()

const Menu =({history})=>
(
   
        <div className="row align-items-center" style={{backgroundColor: "#353b48"}}>
                <div className="col-xl-8 col-lg-28 col-md-18" style ={{paddingLeft: '30px'}}>
                    <Link href="page-index.html" className="brand-wrap">
                        <img className="logo" src="images/logo.png" />
                    </Link> 
                </div>
                
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="widgets-wrap float-md-right">
                        <div className="widget-header mr-3">
                           
                        {user && user.usertype===0 ?
                        <Link className="widget-view" style={isActive(history,'/seller')} to="/seller">
                                <div className="icon-area">
                                    <i className="fa fa-home" style={{color:'white'}}></i>    
                                </div>
                                <small className="text"> Home </small>
                               
                        </Link>:
                        <Link className="widget-view" style={isActive(history,'/')} to="/">
                            <div className="icon-area">
                                <i className="fa fa-home" style={{color:'white'}}></i>    
                            </div>
                            <small className="text"> Home </small>
                        </Link>}
                        </div>
                        <div className="widget-header mr-3">
                        {user && user.usertype===0 ? 
                         <Link className="widget-view" style={isActive(history,'/addproduct')} to="/addproduct">
                                <div className="icon-area">
                                    <i className="fa fa-plus-square" style={{color:'white'}}></i>
                                </div>
                                <small className="text"> Add Product </small>
                            </Link> :
                            <Link className="widget-view" style={isActive(history,'/mycart')} to="/mycart">
                                <div className="icon-area">
                                    <i className="fa fa-shopping-cart" style={{color:'white'}}></i>
                                  
                                </div>
                                <small className="text"> Cart </small>
                            </Link>
                         }
                        </div>
                        <div className="widget-header mr-3">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" style={{color: 'white'}} > <i className="fa fa-user" style={{color: 'white'}}></i> Accounts </a>
                            <div className="dropdown-menu">
                                {user && user.usertype===0 ?
                                <Fragment>
                                    <Link className="dropdown-item" to="/sellerprofile" ><i className="fa fa-user-circle" ></i> My Profile</Link>
                                    <Link className="dropdown-item" to="/manageorder" ><i className="fa fa-tasks " ></i> Manage Orders </Link>
                                    <Link className="dropdown-item" to="/stockreports" ><i className="fa fa-bar-chart " ></i> Stock Reports </Link>
                                    <Link className="dropdown-item" to="/salesreports" ><i className="fa fa-fax"></i> Sales Report </Link>
                                </Fragment>:
                                 <Fragment>
                                 <Link className="dropdown-item" to="/myprofile" ><i className="fa fa-user-circle" ></i> My Profile</Link>
                                 <Link className="dropdown-item" to="/myorders" ><i className="fa fa-store" aria-hidden="true" ></i>  My Orders</Link>
                                 <Link className="dropdown-item" to="/mywishlist" ><i className="fa fa-heart"></i>     Wishlist</Link>
                             </Fragment>
                                
                                }
                                {!isAuthenticate() && (
                                    <Fragment>
                                        <Link className="dropdown-item"  to="/register"><i className= "fas fa-user-plus" /> Signup</Link>
                                        <Link className="dropdown-item"   to="/login"><i className="fas fa-sign-in-alt" /> Signin</Link>
                                    </Fragment>
                                )}
                                {isAuthenticate() && ( 
                                    <span className="dropdown-item" style={{cursor:'pointer', color: '#c23616'}} onClick={()=> signout(()=>{
                                        history.push('/')
                                        })} ><i className="fa fa-user-circle"/> SignOut</span>      
                                )}
                            </div>
					    </div>
                        
                    </div> 
                </div> 
            </div>

);




export default withRouter(Menu);
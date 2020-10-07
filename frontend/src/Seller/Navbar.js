import React,{Fragment} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {signout,isAuthenticate } from '../auth'

const isActive =(history, path)=> {
    if(history.location.pathname === path){
        return {color: '#ff9900'}
    } else{
        return {color: '#ffffff'}
    }  
}  

const Navbar = ({history}) => {

    return(
        <section clasName="header-main border-bottom">
            <div clasName="container">
            <div clasName="row align-items-center">
                <div clasName="col-xl-2 col-lg-12 col-md-12">
                    <a href="page-index.html" clasName="brand-wrap">
                        <img clasName="logo" src="images/logo.png" />
                    </a> 
                </div>
                <div clasName="col-xl-6 col-lg-7 col-md-6">
                </div>
                <div clasName="col-xl-4 col-lg-5 col-md-6">
                    <div clasName="widgets-wrap float-md-right">
                        <div clasName="widget-header mr-3">
                        <Link clasName="widget-view" style={isActive(history,'/')} to="/">
                                <div clasName="icon-area">
                                    <i clasName="fa fa-user"></i>
                                    <span clasName="notify">3</span>
                                </div>
                                <small clasName="text"> Home </small>
                        </Link>
                        </div>
                        <div clasName="widget-header mr-3">
                            <Link clasName="widget-view" style={isActive(history,'/mycart')} to="/mycart">
                                <div clasName="icon-area">
                                    <i clasName="fa fa-comment-dots"></i>
                                    <span clasName="notify">1</span>
                                </div>
                                <small clasName="text"> Cart </small>
                            </Link>
                        </div>
                        <div clasName="widget-header mr-3">
                            <a clasName="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> <i clasName="fa fa-user" style={{color: 'darkorange'}}></i> Accounts </a>
                            <div clasName="dropdown-menu">
                                <Link clasName="dropdown-item" to="/myprofile"><i clasName="fa fa-user-circle"></i> My Profile</Link>
                                <Link clasName="dropdown-item" to="/myorders"><i clasName="fa fa-store"></i> My Orders</Link>
                                <Link clasName="dropdown-item" to="/mywishlist"><i clasName="fa fa-heart"></i>  Wishlist</Link>
                                {!isAuthenticate() && (
                                    <Fragment>
                                            <Link className = "nav-link" style={isActive(history,'/register')} to="/register">Signup</Link>
                                            <Link className = "nav-link" style={isActive(history,'/login')}  to="/login">Signin</Link>
                                    </Fragment>
                                )}
                                {isAuthenticate() && ( 
                                    <span className = "nav-link" style={{cursor:'pointer', color: '#c23616'}} onClick={()=> signout(()=>{
                                        history.push('/')
                                        })} > SignOut</span>      
                                )}
                            </div>
					    </div> 
                    </div> 
                </div> 
            </div>
            </div>
        </section> 
    )
}
export default withRouter(Navbar);
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

const Menu =({history})=>
(

   <header className="section-header" style={{backgroundColor: "#353b48"}}>
	<section className="header-main border-bottom">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-xl-2 col-lg-3 col-md-15" style={{color: "#ffffff"}}>
					<h2>Shop-In</h2>
				</div>
				<div className="col-md-40">
					<div className="widgets-wrap float-md-right">
						<div className="widget-header mr-">
                            <ul className="nav " style={{backgroundColor: "#353b48"}}  >
                                <li className="nav-item">

                                    <Link className = "nav-link" style={isActive(history,'/')} to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className = "nav-link" style={isActive(history,'/')} to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className = "nav-link" style={isActive(history,'/')} to="/listproduct">List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className = "nav-link" style={isActive(history,'/')} to="/mycart">List</Link>
                                </li>

                                {!isAuthenticate() && (
                                    <Fragment>
                                        <li className="nav-item">
                                            <Link className = "nav-link" style={isActive(history,'/register')} to="/register">Signup</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className = "nav-link" style={isActive(history,'/login')}  to="/login">Signin</Link>

                                        </li>
                                    </Fragment>
                                )}

                                {isAuthenticate() && (
                                   
                                        <li className="nav-item">
                                            <span className = "nav-link" style={{cursor:'pointer', color: '#c23616'}} onClick={()=> signout(()=>{
                                                history.push('/')
                                                })} >
                                            SignOut</span>
                                        </li>
                                        
                                        )}
                                    </ul>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </section>
</header>

);

export default withRouter(Menu);
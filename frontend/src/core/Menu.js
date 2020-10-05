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

// const Menu =({history})=>
// (<div>
//     <ul id="dropdown1" className="dropdown-content">
//         <li><a href="#!">one</a></li>
//         <li><a href="#!">two</a></li>
//         <li className="divider"></li>
//         <li><a href="#!">three</a></li>
//     </ul>
//     <nav>
//     <div className="nav-wrapper background-color: #424242 !important">
//       < Link className="brand-logo"><i className="material-icons">shopping_basket</i>Shop-IN</Link>
//       <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
//       <ul className="right hide-on-med-and-down">
//         <li><a href="sass.html"><i className="material-icons">shopping_basket</i></a></li>
//         <li><a href="badges.html"><i className="material-icons">shopping_basket</i></a></li>
//         <li><a href="collapsible.html"><i className="material-icons">shopping_basket</i></a></li>
//         <li><a className="dropdown-trigger"  data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
//       </ul>
//     </div>
//   </nav>

//   <ul className="sidenav" id="mobile-demo">
//     <li><a href="sass.html">Sass</a></li>
//     <li><a href="badges.html">Components</a></li>
//     <li><a href="collapsible.html">Javascript</a></li>
//     <li><a href="mobile.html">Mobile</a></li>
//   </ul>
//   </div>
// );





// <ul id="dropdown1" className="dropdown-content">
//   <li><a href="#!">one</a></li>
//   <li><a href="#!">two</a></li>
//   <li className="divider"></li>
//   <li><a href="#!">three</a></li>
// </ul>
// <nav>
//   <div className="nav-wrapper">
//     <a href="#!" className="brand-logo">Logo</a>
//     <ul className="right hide-on-med-and-down">
//       <li><a href="sass.html">Sass</a></li>
//       <li><a href="badges.html">Components</a></li>
//       <!-- Dropdown Trigger -->
//       <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
//     </ul>
//   </div>
// </nav> */}



export default withRouter(Menu);
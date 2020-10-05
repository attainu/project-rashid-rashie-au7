import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from './User/Signup'
import Signin from './User/Signin'
import Home from './core/Home'
import Menu from './core/Menu'
import BuyerRoutes from './auth/BuyerRoutes';
import BuyerHome from '../src/Buyer/Buyer_home';
import SellerRoutes from './auth/SellerRoutes';
import SellerHome from '../src/Seller/SellerHome';
import AddProduct from './Seller/AddProduct';
import ListProduct from './core/ListProducts';
import StockRpt from './Seller/StockRpt';
import SalesRpt from './Seller/SalesRpt';
import DetailProduct from './core/DetailProduct';
import Cart from './Buyer/Cart'
import Checkout  from './Buyer/Checkout'
import Order from './Buyer/Order'
import Wishlist from './Buyer/Wishlist'
import SellerProfile from './Seller/SellerProfile'
import ProfileUpdate from './Buyer/ProfileUpdate'
import UpdateProduct from './Seller/UpdateProduct'

const Routes = () => {
    return (
        <BrowserRouter>
        <Menu />
            <Switch>
                <Route path="/" exact component ={Home} />    
                <Route path="/register" exact component ={Signup} />
                <Route path="/login" exact component ={Signin} />
                <Route path="/listproduct" exact component ={ListProduct} />  
                <Route path = "/detailproduct/:prdtid" exact component={DetailProduct} />
                
                <BuyerRoutes path = "/profile" exact component={ProfileUpdate} />
                <BuyerRoutes path = "/dashboard" exact component={BuyerHome} />
                <BuyerRoutes path = "/mycart" exact component={Cart} />
                <BuyerRoutes path = "/wishlist" exact component={Wishlist} />
                <BuyerRoutes path = "/myorders" exact component={Order} />
                <BuyerRoutes path = "/checkout" exact component={Checkout} />

                <SellerRoutes path = "/seller" exact component={SellerHome} />
                <SellerRoutes path = "/addproduct" exact component={AddProduct} />
                <SellerRoutes path = "/stkrpt" exact component={StockRpt} />
                <SellerRoutes path = "/salesrpt" exact component={SalesRpt} />
                <SellerRoutes path = "/sellerprofile" exact component={SellerProfile} />
                <SellerRoutes path = "/updateproduct/:prdtid/:userid" exact component={UpdateProduct} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
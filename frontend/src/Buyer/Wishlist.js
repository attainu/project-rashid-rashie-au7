
import React ,{useState,useEffect}from 'react';
import {getWishlist,removeWishlist} from './ApiCart';
import  {isAuthenticate} from '../auth/index'

const Wishlist = () => {
    const {user,token} = isAuthenticate();
	const [products,setProducts]=useState([])
	const [error,setError]=useState([])

	const loadWishlist =() => {
        getWishlist({user:user.userid}).then(data => {
            if(data.error){
                setError(data.error)
            } else{
                setProducts(data)
            }            
        })
    }

    useEffect(() => {
        loadWishlist()
        
    }, []);

    return (
        <section className="section-content padding-y">
        <div className="container">
            <div className="row">
                <main className="col-md-10">

                    <header className="section-heading heading-line">
                        <h4 className="title-section text-uppercase"><i className="fa fa-heart"></i> My Wishlist</h4>
                    </header>
                    {/* <header className="mb-3">
                        <div className="form-inline">
                            <strong className="mr-md-auto">0 items found </strong>
                        </div>
                    </header> */}
                    <article className="card card-product-list">
                    {products.map((product,i)=>(
                        <div className="row no-gutters">
                            <aside className="col-md-3">
                                <a className="img-wrap" >
                                    <img src="/images/items/7.jpg"/>
                                </a>
                            </aside>
                            <div className="col-md-6">
                                <div className="info-main">

                                    <p key={i} className="h5 title">{product.prdtname} </p>
                                </div>
                                <div>
                                    <small key={i} className="text-muted">{product.descn}</small>
                                </div>
                                <div  key={i} className="price mt-1"> <p style={{fontSize: '24px', fontWeight: '500', display: 'inline', fontFamily:'Cochin'}}>₹ {product.price} </p>      
                                    <span  key={i} className="badge badge-danger" style={{marginLeft: '10px' , marginBottom:'15px'}}>{product.offer}% Off </span>
                                </div>
                            </div> 
                            <aside className="col-md-3">
                                <div className="info-aside">
                                    <div className="price-wrap">
                                        <span className="h5 price">Price<small className="text-muted">/per item</small></span>	
                                    </div>
                                    <small className="text" style={{color: "green"}}>Free delivery in 2-3 days</small>
                                    <div className="h6">brand</div>
                                    <div className="h6">catgy</div>
                                    <div className="mt-3">

                                        <button key={i} onClick={()=>{removeWishlist({user:user.userid,product:product.prdtid})}} className="btn btn-outline-primary"> <i className="fa fa-trash"></i> Remove Item </button>
                                    </div>
                                </div>
                            </aside> 
                        </div> 	

                        ))} 
                        </article>
                </main> 
            </div>
                <div style={{textAlign: 'center', marginTop: '40px',marginBottom: '40px'}}>
                    <img src="images/emptyicons/empty_wishlist.png" style={{justifyContent:'center'}}/>	   
                </div>  
        </div> 
    </section>
    )
    
}

export default Wishlist





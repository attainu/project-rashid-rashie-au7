import React, {useState,useEffect} from 'react';
import '../style.css';
import {getPrdtData,similiarProducts} from './apiCore'
import Card from './Card'
import  {isAuthenticate} from '../auth/index'
import {addCart,addWishlist} from '../Buyer/ApiCart'

const DetailProduct = (props) =>{

    const [product,setProduct] = useState({})
    const [similiar,setSimiliar] = useState([])
    const [error,setError] = useState(false)
    const {user,token} = isAuthenticate()
    const [redirect, setRedirect] = useState(false);
    

    const loadProduct = prdtid => {
        getPrdtData(prdtid).then(data => {
            if(data.error){
                setError(data.error)
            }else{
                setProduct(data)
                similiarProducts(data.prdtid).then(data=>{
                    if(data.error){
                        setError(data.error)
                    }else{
                        setSimiliar(data)
                    }
                })
            }      
        })
    }

    const addToCart =()=>{
        console.log("Clicked cart",product)
        addCart({user:user.userid,prdt:product.prdtid})

        
    }
    const addToWishlist=()=>{
        console.log("wishlisttttttt")
        addWishlist({user:user.userid,prdt:product.prdtid})
    }

    useEffect(()=> {
        const prdtid = props.match.params.prdtid
        loadProduct(prdtid)
    },[props])
    
    return(
        <div>
            <section className="section-content bg-white padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-6">
                            <div className="card">
                                <article className="gallery-wrap"> 
                                    <div className="img-big-wrap">
                                        <div> <img src={product.imgpath1} /></div>
                                    </div> 
                                    <div className="thumbs-wrap">
                                        <a href="#" className="item-thumb"> <img src="/images/items/4.jpg"/></a>
                                        <a href="#" className="item-thumb"> <img src="/images/items/9.jpg"/></a>  
                                        <a href="#" className="item-thumb"> <img src="/images/items/15-1.jpg"/></a>      
                                    </div> 
                                </article> 
                            </div>
                        </aside>
                        <main className="col-md-6">
                            <article className="product-info-aside">
                                <h2 className="title mt-3">{product.prdtname} </h2>
                                <div className="rating-wrap my-3">
                                    <small className="label-rating text-success"> <i className="fa fa-clipboard-check"></i> {product.sold} </small>
                                </div> 
                                <div className="mb-3"> 
                                     <var className="price h4">{product.price}</var> 
                                    <span className="text-muted">USD {product.offer} incl. VAT</span> 
                                </div> 
                                <p> {product.descn} </p>
                                <dl className="row">
                                <dt className="col-sm-3">Manufacturer</dt>
                                <dd className="col-sm-9">{product.brand}</dd>
    
                                <dt className="col-sm-3">Product ID</dt>
                                <dd className="col-sm-9">{product.brand}</dd>
    
                                <dt className="col-sm-3">Delivery time</dt>
                                <dd className="col-sm-9">3-4 days</dd>
    
                                <dt className="col-sm-3">Availabilty</dt>
                                <dd className="col-sm-9">in Stock</dd>
                                </dl>
                                <div className="form-row  mt-4"> 
                                    <div className="form-group col-md">
                                        <button onClick={addToCart} className="btn  btn-primary mr-2"> 
                                            <i className="fas fa-shopping-cart"></i> <span className="text">Add to cart</span> 
                                        </button>
                                  
                                        <button  onClick={addToWishlist} className="btn btn-light">
                                            <i className="fas fa-envelope"></i> <span className="text">Add to Wishlist</span> 
                                        </button>
                                        
                                    </div>
                                </div> 
                            </article> 
                        </main> 
                    </div> 
                </div>
            </section>
            <div>
                <h2>Similiar Products</h2>
                <div className='row'> 
                    {similiar.map((pdt,i)=>(
                    <Card key={i}  product={pdt} />
                    ))}
                </div>
            </div>
        </div>    
    )
}

export default DetailProduct
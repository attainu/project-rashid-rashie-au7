import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import '../style.css';

 

const Card = ({product,cardType}) => {
    
    const PrdtCardView = (product) => {
        
            return(
                <div className="col-xl-3 col-lg-6 col-md-3 col-4">
                    <figure className="card card-product-grid">
                        <Link to={`/detailproduct/${product.prdtid}`}>                    
                            <div className="img-wrap"> 
                                <span className="badge badge-danger"> NEW </span>
                                <img src="/images/items/1.jpg"/>
                            </div> 
                            <figcaption className="info-wrap">
                                <div className="title mb-2" >
                                    <span className="title mb-2" style={{ display:"inline"}}>{(product.prdtname)}</span> 
                                </div>
                                <p className="text-muted ">{product.brand}</p>
                                <hr/>
                                <div className="price-wrap">
                                    <span className="price">₹ {product.price}</span> 
                                    <small className="text-muted">/per item</small>
                                </div> 
                                <div className="price mt-1"> <p style={{fontSize: "24px" , fontWeight: "500", display: "inline", fontFamily:"Cochin"}}>₹ {product.offer} </p>  
                                <small className="badge badge-danger"style={{marginLeft: "10px", marginBottom:"15px"}}>{product.offer} % Off </small></div>
                                <div className="price mt-1" style={{color: "green"}}>In Stock</div>
                                <div className="price mt-1" style={{color:"red"}}>Out of Stock</div>
                            </figcaption>
                        </Link>
                    </figure>
                </div>               
            )
        
    }

    return (
        <Fragment>
            {PrdtCardView(product)}
        </Fragment>
    )


    
}

export default Card;

import React, { useState,useEffect } from 'react'
import {getCart,removeCart,updateCart} from './ApiCart';
import  {isAuthenticate} from '../auth/index'
import {Link} from 'react-router-dom'

const Cart = () => {
	const {user,token} = isAuthenticate();
	const [products,setProducts]=useState([])
	const [error,setError]=useState([])

	const loadCart =() => {
        getCart({user:user.userid}).then(data => {
            if(data.error){
                setError(data.error)
            } else{
                setProducts(data)
            }    
        })
	}
	

    useEffect(() => {
        loadCart()
        
    }, []);

    return (
		<section className="section-content padding-y">
			<div className="container">
				<div className="row">
				<main className="col-md-9">
					<div className="card">
						<table className="table table-borderless table-shopping-cart">
							<thead className="text-muted">
								<tr className="small text-uppercase">
									<th scope="col">Product</th>
									<th scope="col" width="120">Quantity</th>
									<th scope="col" width="120">Price</th>
									<th scope="col" className="text-right" width="200"> </th>
								</tr>
							</thead>
						<tbody>
						{products.map((product,i)=>(	
						<tr>
							<td>
								<figure className="itemside">
									<div key={i} className="aside"><img src={product.imgpath1}  className="img-sm"/></div>
									<figcaption className="info">
								<h6 key={i} className="title text-dark">{product.prdtname}</h6> 
										<p key={i} className="small text-muted">Category:{product.catgy},Brand:{product.brand} </p>
									</figcaption>
								</figure>
							</td>
							<td>
								<div className="input-group mb-3 input-spinner">
										<div className="input-group-prepend">
											<form key={i}>
												{product.qty >0 ? 
															<button key={i} onClick={()=>{updateCart({user:user.userid,product:product.prdtid,status:0})}} 
																 className="btn btn-light" type="submit" id="button-minus"> &minus;</button>
															:<button  key={i} onClick={()=>{updateCart({user:user.userid,product:product.prdtid,status:0})}} style={{pointerEvents:"none",opacity: "0.4"}}
																className="btn btn-light" type="submit"  id="button-minus"> &minus;</button>}
											 </form>
										</div>
											{/* <p key ={i} className="title text-dark ml-2 mr-2">qty</p> */}
											<input key ={i} type="text" class="form-control" value={product.qty}></input>
										<div className="input-group-append">
											<form >
											<button key={i} onClick={()=>{updateCart({user:user.userid,product:product.prdtid,status:1})}} className="btn btn-light" type="submit" id="button-plus"> +</button></form>
										</div>
									</div>
							</td>
							<td> 
								<div className="price-wrap"> 
									<var key={i} className="price">₹ {(product.offer).toFixed(2)} </var> 
									<small key={i} className="text-muted">₹ {(product.price).toFixed(2)}</small> 
								</div>
							</td>
							<td className="text-right"> 
								<button key={i} onClick={()=>{removeCart({user:user.userid,product:product.prdtid})}} className="btn btn-outline-primary"><i className="fa fa-trash mr-2"></i> Remove</button>
							</td>
							
						</tr>
					))} 
										
					</tbody>
					</table>
					<div className="card-body border-top">
						< Link to="/checkout" className="btn btn-primary float-md-right"> Place Order <i className="fa fa-chevron-right"></i> </Link>
						<a Link to="/homebuyer" className="btn btn-light"> <i className="fa fa-chevron-left"></i> Continue shopping </a>
					</div>	
					</div> 			
				</main>
				<aside className="col-md-3">
					<div className="card">
						<div className="card-body">
								<dl className="dlist-align h6">
								<dt>Total price:</dt>
								<dd className="text-right h6">₹  </dd>
								</dl>
								<dl className="dlist-align">
								<dt>Tax:</dt>
								<dd className="text-right">₹  </dd>
								</dl>
								<dl className="dlist-align">
								<dt>Discount:</dt>
								<dd className="text-right">₹  </dd>
								</dl>
								<dl className="dlist-align h5">
								<dt>Total:</dt>
								<dd className="text-right  h5"><strong>₹  </strong></dd>
								</dl>
								<hr/>
								<p className="text-center mb-3">
									<img src="images/misc/payments.png" height="26" />
								</p>			
						</div>
					</div> 
				</aside> 
				</div>	
				<hr />
				<div style={{textAlign: "center", marginTop: "5px" }}>
					<img src="/images/banners/hp_default_sale_1192020.jpg " style={{justifyContent: "center"}} />	   
				</div> 		
			</div>
		</section>
    )

}

export default Cart





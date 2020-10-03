import React from 'react'

const Cart = () => {

    return (

    <section class="section-content padding-y">
	<div class="container">
		<div class="row">
		<main class="col-md-9">
			<div class="card">
				<table class="table table-borderless table-shopping-cart">
					<thead class="text-muted">
						<tr class="small text-uppercase">
							<th scope="col">Product</th>
							<th scope="col" width="120">Quantity</th>
							<th scope="col" width="120">Price</th>
							<th scope="col" class="text-right" width="200"> </th>
						</tr>
					</thead>
				<tbody>	
				<tr>
					<td>
						<figure class="itemside">
							<div class="aside"><img src="/images/items/15.jpg"  class="img-sm"/></div>
							<figcaption class="info">
                                <h2 class="title text-dark">Product Name</h2> 
								<p class="small text-muted">Category:,  Brand: </p>
							</figcaption>
						</figure>
					</td>
					<td>
						<div class="input-group mb-3 input-spinner">
								<div class="input-group-prepend">
								    <form action="" method="POST">
								    <button class="btn btn-light" type="submit" id="button-plus"> + </button> </form>
								</div>
								<input type="text" class="form-control" value="0" />
								<div class="input-group-append">
									<form action="" method="POST">
								    <button class="btn btn-light" type="submit" id="button-minus"> &minus; </button></form>
								</div>
							</div>
					</td>
					<td> 
						<div class="price-wrap"> 
							<var class="price">₹ </var> 
							<small class="text-muted">₹ </small> 
						</div>
					</td>
					<td class="text-right"> 
						<a href="/removecart/?id=<%=prdt.prdtid%>" class="btn btn-outline-primary"><i class="fa fa-trash"></i>  Remove</a>
					</td>
				</tr>
								
			</tbody>
			</table>
			<div class="card-body border-top">
				<a href="/checkout" class="btn btn-primary float-md-right"> Place Order <i class="fa fa-chevron-right"></i> </a>
				<a href="/homebuyer" class="btn btn-light"> <i class="fa fa-chevron-left"></i> Continue shopping </a>
			</div>	
			</div> 			
		</main>
		<aside class="col-md-3">
			<div class="card">
				<div class="card-body">
						<dl class="dlist-align h6">
						<dt>Total price:</dt>
						<dd class="text-right h6">₹  </dd>
						</dl>
                        <dl class="dlist-align">
						<dt>Tax:</dt>
						<dd class="text-right">₹  </dd>
						</dl>
						<dl class="dlist-align">
						<dt>Discount:</dt>
						<dd class="text-right">₹  </dd>
						</dl>
						<dl class="dlist-align h5">
						<dt>Total:</dt>
						<dd class="text-right  h5"><strong>₹  </strong></dd>
						</dl>
						<hr/>
						<p class="text-center mb-3">
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





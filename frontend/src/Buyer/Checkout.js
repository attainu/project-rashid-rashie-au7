import React from 'react'

const Checkout = () => {

    return (
        <section className="section-content padding-y">
            <div className="container">
                <div className="row">
                    <main className="col-md-9">		
                        <div className="card">
                            <table className="table table-borderless table-shopping-cart">
                                <thead className="text-muted">
                                    <tr className="small text-uppercase">
                                        <th scope="col" width="30">sl.no</th>
                                        <th scope="col"width="200">Product</th>
                                        <th scope="col" width="80">Quantity</th>
                                        <th scope="col" width="80">Price</th>
                                        <th scope="col" width="70">Total</th>
                                        <th scope="col" className="text-right" width="80"> </th>
                                    </tr>
                                </thead>
			                    <tbody> 
				<tr>
					<td> 
						<var>1</var> 
					</td>
					<td>
						<a href="/detailproduct/?id=<%= ele.prdtid %>" className="title text-dark">ProductNAme </a>						
					</td>
					<td> 
						<var className="text">Qty</var>
					</td>
					<td> 
						<div className="price-wrap"> 
							<var className="price">₹ 0.00</var> 
							<small className="text-muted"> ₹ 0.00</small> 
						</div>
					</td>
					<td> 
						<var className="price">₹ 0.00</var> 
					</td>
					<td > 
						<a href="#" className="btn btn-light btn-round"> Remove</a>
					</td>
				</tr>
			</tbody>
			                </table>
			    <div className="card-body border-top">
				<div className="col-md-10">
					<div className="info-main">
						<div className="form-row">
							<div className="col form-group">
								<label>First Name </label>
								  <input type="text"name="name" className="form-control" placeholder="" value="<%=user.firstname%>" />
							</div>
							<div className="col form-group">
								<label>Last Name</label>
								  <input type="text" name="offer"className="form-control" placeholder=" "  value="<%=user.lastname%>" />
							</div> 
						</div>
						<div className="form-row">
							<div className="col form-group">
								<label>Email </label>
								  <input type="text"name="name" className="form-control" placeholder="" value="<%=user.email%>" />
							</div>
							<div className="col form-group">
								<label>Mobile</label>
								  <input type="number" name="mob"className="form-control" placeholder=" "  value="<%=user.phone%>" />
							</div> 
						</div>
						<div className="form-row">
							<div className="col form-group">
								<label>Home </label>
								  <input type="text"name="name" className="form-control" placeholder="" value="<%=user.home%>" />
							</div>
							<div className="col form-group">
								<label>Street</label>
								  <input type="text" name="offer"className="form-control" placeholder=" "  value="<%=user.street%> " />
							</div> 
						</div>
						<div className="form-row">
							<div className="col form-group">
								<label>City </label>
								<input type="text"name="name" className="form-control" placeholder="" value="<%=user.city%>" />
							</div>
							<div className="col form-group">
								<label>State</label>
								<input type="text" name="offer"className="form-control" placeholder=" "  value="<%=user.state%>" />
							</div> 
						</div>
						<div className="form-row">
							<div className="col form-group">
								<label>PO Box</label>
								<input type="text"name="name" className="form-control" placeholder="" value="<%=user.po%>" />
							</div>
							<div className="col form-group">
								<label>PB Number</label>
								<input type="number" name="offer"className="form-control" placeholder=" "  value="<%=user.pin%>" />
							</div> 
						</div>
					</div>
				</div>
				<form >
				<button className="btn btn-primary float-md-right"> Check Out <i className="fa fa-chevron-right"></i> </button>
				</form>
			</div>	
			</div> 
		</main>
		<aside className="col-md-3">
        <div className="card mb-3">
				<div className="card-body">
				<form>
					<div className="form-group">
						<label>Have coupon?</label>
						<div className="input-group">
							<input type="text" className="form-control" name="" placeholder="Coupon code"/>
							<span className="input-group-append"> 
								<button className="btn btn-primary">Apply</button>
							</span>
						</div>
					</div>
				</form>
				</div> 
			</div> 
			<div className="card">
				<div className="card-body">
                    <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right">₹ 0.00</dd>
                    </dl>
                    <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right">₹ 0.00</dd>
                    </dl>
                    <dl className="dlist-align">
                    <dt>Extra Discount:</dt>
                    <dd className="text-right">₹ 0.00</dd>
                    </dl>
                    <dl className="dlist-align">
                    <dt>Tax Amount:</dt>
                    <dd className="text-right">₹ 0.00</dd>
                    </dl>
                    <dl className="dlist-align">
                    <dt>Shipping Charge:</dt>
                    <dd className="text-right">₹ 0.00</dd>
                    </dl>
                    <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right  h5"><strong>₹ 0.00</strong></dd>
                    </dl>
                    <hr />
                    <div><p className="text-center mb-3">
                            <img src="images/misc/payments.png" height="26" />
                        </p>
                    </div>							
				</div>
			</div> 
		</aside> 
	</div>

		
		<div >
			<a href="buyerhome" className="btn btn-outline-primary"> <i className="fa fa-shopping-cart"></i> Start Shopping </a>
		</div> 
		 

	</div>
</section>
)
}

export default Checkout





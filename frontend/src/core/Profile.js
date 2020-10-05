import React from  'react'
import {isAuthenticate} from  '../auth/index'
import {Link} from 'react-router-dom';

const Profile  =({match}) => {
	


	const showBuyerProfile = BuyerProfileview => {
		return (
		  BuyerProfileview && (
			<div className="form-row">
				<div className="col form-group">
					<label>Gender</label>
					<select id="inputState" name ="cat" class="form-control">
						<option selected=""> Choose...</option>
						<option>Male</option>
						<option>Female</option>
					</select>
				</div>		
				<div className="col form-group">
					<label>Home</label>
					<input type="text" className="form-control" placeholder=""name ="home" value ="" />
				</div> 
			</div>
			
		  )
		);
	  };

	  const showSellerProfile = sellerProfileView => {
		return (
		  sellerProfileView && (
			<div className="form-row">
				<div className="col form-group">
					<label>Shop Name</label>
					<input type="text" className="form-control" name ="shop"value ="" />
				</div>		
				<div className="col form-group">
					<label>GSTIN</label>
					<input type="text" className="form-control" name ="gstin" value ="" />
				</div> 
			</div>
			
		  )
		);
	  };

    return(
    <section className="section-content padding-y">
	<div className="container">
		<div className="row">
			<main className="col-md-10" >
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase"><i className="fa fa-user-circle"></i>  My Profile</h4>
				</header>
				<header className="mb-3">
					<div className="form-inline">
						<strong className="mr-md-auto">Basic Info </strong>
					</div>
				</header>
				<form >
					
				<article className="card mx-auto" style={{padding:'50px 80px 50px 80px'}}>
						<div className="form-row" >
								<div className="col form-group">
									<label>First Name</label>
									<input type="text" className="form-control" placeholder=""name ="fname"value ="" />
								</div>		
								<div className="col form-group">
									<label>Last Name</label>
									<input type="text" className="form-control"name ="lname" value ="" />
								</div> 
						</div>

						<div className="form-row">
								<div className="col form-group">
									<label>Email</label>
									<input type="text" className="form-control" placeholder=""name ="email" value ="" />
								</div>		
								<div className="col form-group">
								<label>Mobile</label>
								<input type="text" className="form-control" placeholder=""name ="mobile" value ="" />
								</div> 
						</div>
						<div className="form-row">
								<div className="col form-group">
									<label>Street</label>
									<input type="text" className="form-control" placeholder=""name ="street"value ="" />
								</div>		
								<div className="col form-group">
									<label>City</label>
									<input type="text" className="form-control" placeholder=""name ="city" value ="" />
								</div> 
						</div>

						<div className="form-row">
								<div className="col form-group">
									<label>Post Box</label>
									<input type="text" className="form-control" placeholder=""name ="street"value ="" />
								</div>		
								<div className="col form-group">
									<label>PB Number</label>
									<input type="text" className="form-control" placeholder=""name ="city" value ="" />
								</div> 		
						</div>

						<div className="form-row">
								<div className="col form-group">
									<label>State</label>
									<select id="inputState" name ="cat" class="form-control">
										<option selected=""> Choose...</option>
										<option>Andra Pradesh</option>
										<option>Chattisgarh</option>
										<option>Goa</option>
										<option>Karnataka</option>
										<option>Kerala</option>
										<option>Tamil Nadu</option>
										<option>Telngana</option>
										<option>Others</option>

					  				</select>
								</div>		
								<div className="col form-group">
									<label>Others</label>
									<input type="text" className="form-control" placeholder=""name ="city" value ="" />
								</div> 		
						</div>	 

				</article>
			</form>
			</main> 
		</div>
	</div> 
</section>

    )
}

export default Profile
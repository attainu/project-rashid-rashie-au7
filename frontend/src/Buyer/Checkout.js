import React, {useState,useEffect} from 'react';
import  {API} from '../config/config';
import Axios from "axios";
import {getChkoutPrdts,postChkoutPrdts} from './ApiBuyer'
import '../style.css';
import  {isAuthenticate} from '../auth/index'
import {Redirect} from 'react-router-dom'


const Checkout = () => {
    const {user,token} = isAuthenticate();
    const [checkoutPrdts, setChkoutPrdts] = useState([])
    const [userinfo,setUserinfo] = useState([[]])
    const [error, setError] = useState(false)
    const [calculation,setCalculation]=useState([])
    const [redirectToUser, setRedirectToUser] = useState(false);

    const loadChkoutPrdts =() => {
        getChkoutPrdts(user.userid,token).then(data => {
            if(data.error){
                setError(data.error)
            } else{
                setChkoutPrdts(data.results)
                setUserinfo(data.userinfo)
                setCalculation(data.calculation)
            }            
        })
    }

    useEffect(() => {
       loadChkoutPrdts()
        
    }, []);

    const paymentHandler = async (e,params,total) => {
        e.preventDefault();
        const orderUrl = `${API}/payment/${params}/?total=${total}`;
        const response = await Axios.get(orderUrl);
        const { data } = response;
        const options = {
          key: process.env.RAZOR_PAY_TEST_KEY,
          name: "Shop-IN",
          description: "Thank you for shop with us!!!!!!",
          order_id: data.id,
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
             const url = `${API}/payment/${paymentId}/?total=${total}`;
             const captureResponse = await fetch(url, {method:'POST'})
             console.log(captureResponse.data,"capture");
             postChkoutPrdts(user.userid,paymentId,token).then(data=>{
                 if(data.error){
                     setError(error)
                 }else{
                     setRedirectToUser(true);
                 }
             })
            } catch (err) {
              console.log(err);
            }
          },
          theme: {
            color: "#686CFD",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const redirectUser = () => {
        if (redirectToUser) {
            if (!error) {
                return <Redirect to="/myorders" />;
            }
        }
    };
    
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
                                        <th scope="col" width="50">Qty</th>
                                        <th scope="col" width="70">Price</th>
                                        <th scope="col" width="70">Tax</th>
                                        <th scope="col" width="70">Total</th>
                                        <th scope="col" className="text-right" width="70"> </th>
                                    </tr>
                                </thead>
			                    <tbody> 
                                {checkoutPrdts.map((product,i)=>(	
                                    <tr key={i}>
                                        <td> 
                                            <var>{++i}</var> 
                                        </td>
                                        <td>
                                            <a  className="title text-dark">{product.prdtname} </a>						
                                        </td>
                                        <td> 
                                            <var className="text">{product.cartqty} </var>
                                        </td>
                                        <td> 
                                            <div className="price-wrap"> 
                                                <var className="price">₹ {(product.price-(product.price*product.offer/100)).toFixed(2) } </var> 
                                                <small className="text-muted"> ₹ {product.price} </small> 
                                            </div>
                                        </td>
                                        <td> 
                                            <div className="price-wrap"> 
                                                <var className="price"> ₹ {(product.tax_amount).toFixed(2) } </var> 
                                                <small className="text-muted">{product.gstper} %</small> 
                                            </div>
                                        </td>
                                        <td> 
                                            <var className="price">₹ {(product.price * product.cartqty).toFixed(2) } </var> 
                                        </td>
                                       
                                    </tr>		))} 
			                    </tbody>
			                </table>
                            <div className="card-body border-top">
                            <div className="col-md-10">
                                <div className="info-main">.
                            
                                    <h2>Shipping Address</h2>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label style={{color:'black'}}>First Name </label>
                                            <input type="text"name="name" className="form-control" placeholder={userinfo.firstname} required  />                                        </div>
                                        <div className="col form-group">
                                            <label style={{color:'black'}}>Last Name</label>
                                            <input type="text" name="offer"className="form-control" placeholder={userinfo.lastname} required   />
                                        </div> 
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label style={{color:'black'}}>Email </label>
                                            <input type="text"name="name" className="form-control" placeholder={userinfo.email} required  />
                                        </div>
                                        <div className="col form-group">
                                            <label style={{color:'black'}}>Mobile</label>
                                            <input type="number" name="mob"className="form-control" placeholder={userinfo.phone} required   />
                                        </div> 
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label style={{color:'black'}}>Home </label>
                                            <input type="text"name="name" className="form-control" placeholder={userinfo.home} required />
                                        </div>
                                        <div className="col form-group">
                                            <label style={{color:'black'}}>Street</label>
                                            <input type="text" name="offer"className="form-control" placeholder={userinfo.street}  required />
                                        </div> 
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label style={{color:'black'}}>City </label>
                                            <input type="text"name="name" className="form-control" placeholder={userinfo.city} required  />
                                        </div>
                                        <div className="col form-group">
                                            <label style={{color:'black'}}>State</label>
                                            <input type="text" name="offer"className="form-control" placeholder={userinfo.state} required  />
                                        </div> 
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label style={{color:'black'}}>PO Box</label>
                                            <input type="text"name="name" className="form-control" placeholder={userinfo.po} required  />
                                        </div>
                                        <div className="col form-group">
                                            <label style={{color:'black'}}>PB Number</label>
                                            <input type="number" name="offer"className="form-control" placeholder={userinfo.pin} required />
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <form >
                            <button onClick={(e)=>{paymentHandler(e,user.userid,calculation.total)}} className="btn btn-primary float-md-right"> Pay Now <i className="fa fa-chevron-right"></i> </button>
                            </form>
                        </div>	
			</div> 
		</main>
		<aside className="col-md-3">
         
			<div className="card">
				<div className="card-body">
                    <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right">{calculation.sub_total}</dd>
                    </dl>
                    <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right">₹{calculation.offer}</dd>
                    </dl>
                    
                    <dl className="dlist-align">
                    <dt>Tax Amount:</dt>
                    <dd className="text-right">₹{calculation.tax_amount}</dd>
                    </dl>
                    <dl className="dlist-align">
                    <dt>Shipping Charge:</dt>
                    <dd className="text-right">₹ 0</dd>
                    </dl>
                    <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right  h5"><strong>{calculation.total}</strong></dd>
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
        <a Link to="/home" className="btn btn-outline-primary"> <i className="fa fa-shopping-cart"></i> Start Shopping </a>
    </div> 
	</div>
    {redirectUser()}
</section>
)
}

export default Checkout





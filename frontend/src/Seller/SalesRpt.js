import React,{useState,useEffect} from 'react';
import Layout from '../core/Layout';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {getSales} from './ApiSeller'
import  {isAuthenticate} from '../auth/index'


const SalesRpt = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [Enddate, setEndDate] = useState(new Date());
    const {user,token} = isAuthenticate();

    const loadProduct = () => {
        getSales(user.userid,token,{startDate:startDate.toISOString(),Enddate:Enddate.toISOString()}).then(data => {
            if(data.error){
                console.log(data.error)
                // setError(data.error)
            }else{
                // setProduct(data)
            }      
        })
    }

    useEffect(() => {
        loadProduct()
        
    }, []);


    const salesRpt =() => {
        return (
            <div className="container mt-3" >
                
            <div className="row-sm">
                        <div className="form-row">
                            <div className="col form-group">
                                <label>From Date</label>
                                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </div>
                            <div className="col form-group">
                                <label>To Date</label> <br/>
                                <DatePicker selected={Enddate} onChange={date => setEndDate(date)} />    
                            </div> 

                            <div>
                                {JSON.stringify(startDate)}
                                {JSON.stringify(Enddate)}
                            </div>
                        </div>
                <div className="card">
                
                <table className="table  ">
                <thead className="text-muted">
                    <tr className="small text-uppercase">
                        <th scope="col" width="30">sl.no</th>
                        <th scope="col"width="80">ID</th>
                        <th scope="col"width="250">Product</th>
                        <th scope="col"width="100">Catgy</th>
                        <th scope="col" width="100">Brand</th>
                        <th scope="col" width="50">Qty</th>
                        <th scope="col" width="75">Price</th>
                        <th scope="col" width="75">offer</th>
                        <th scope="col" width="75">Total</th>
                        <th scope="col" width="75">gst</th>
                        <th scope="col" width="75">gstamt</th>
                        <th scope="col" width="75">netamt</th>
                        <th scope="col" width="100">buyer</th>
                    </tr>
                </thead>
               
                <tbody> 
                   
                    <tr>
                        <td> 
                            <h4  className="title text-dark">slno </h4> 
                        </td>
                        <td>
                            <h4  className="title text-dark">ODID </h4>    
                        </td>
                        <td> 
                            <h4  className="title text-dark">Prdt Name </h4>
                        </td>
                        <td> 
                            <h4  className="title text-dark">Catgy </h4>
                        </td>
                        <td> 
                            <h4  className="title text-dark">brand </h4>
                        </td>
                        <td > 
                            <h4  className="title text-dark">Qtyyyy </h4>
                        </td>
                        <td > 
                            <h4  className="title text-dark">price </h4>
                        </td>
                        <td > 
                            <h4  className="title text-dark">offer </h4>
                        </td>
                        <td > 
                            <h4  className="title text-dark">total </h4>
                        </td>
                        <td > 
                            <h4  className="title text-dark">gst </h4>
                        </td>
                        <td > 
                            <h4  className="title text-dark">gstamt </h4>
                        </td>
                        <td > 
                            <h4  className="title text-dark">netamt </h4>
                        </td>
                        <td > 
                            <h4  className="title text-dark">buyer </h4>
                        </td>
                    </tr>
                </tbody>
                </table>
              
                </div> 
            </div>
        </div>

        )
    };
    return (
        <div>
            
                    {salesRpt()}    
       </div>
    )
}

export default SalesRpt
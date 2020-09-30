import React from 'react';
import Layout from '../core/Layout';


const StockRpt = () => {
    

    const stkRpt =() => {
        return (
            <div className="container" >
            <div className="row-sm">
                <div className="card">
                <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                    <tr className="small text-uppercase">
                        <th scope="col" width="30">sl.no</th>
                        <th scope="col"width="100">PrdtID</th>
                        <th scope="col"width="300">Product</th>
                        <th scope="col"width="200">Catgy</th>
                        <th scope="col" width="130">Brand</th>
                        <th scope="col" width="80">Qty</th>
                        <th scope="col" width="80">Price</th>
                        <th scope="col" width="80">gst</th>
                        <th scope="col" width="70">Status</th>
                    </tr>
                </thead>
               
                <tbody> 
                   
                    <tr>
                        <td> 
                            <h4  className="title text-dark">slno </h4> 
                        </td>
                        <td>
                            <h4  className="title text-dark">Prdt ID </h4>    
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
                            <h4  className="title text-dark">Status </h4>
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
        <Layout >
            
                    {stkRpt()}    
        </Layout>
    )
}

export default StockRpt
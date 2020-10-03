import React, {useState,useEffect} from 'react';
import Layout from '../core/Layout';
import {isAuthenticate} from '../auth';
import {Link} from 'react-router-dom';
import {createProduct} from './ApiSeller';

const AddProduct =() =>{

    const [values,setValues] = useState({
        prdtname:'',
        descn:'',
        brand: '',
        catgy:'',
        price:'',
        gstper:'',
        qty: '',
        offer: '',
        imgpath1:'',
        imgpath2:'',
        video:'',
        loading:false,
        error:'',
        created:'',
        redirectToProfile: false   
    })

    
    const {user,token} = isAuthenticate();
    const {
        prdtname,
        descn,brand,catgy,price,gstper,
        qty,offer,imgpath1,imgpath2,video,
        loading,error,created,
        redirectToProfile 
    } = values;

    // useEffect(() =>{
    //     setValues({...values, formData: new FormData() });

    // }, []);

    

    // const handleChange = prdtname => event => {
    //     const value = prdtname === 'photo' ? event.target.files[0] : event.target.value;
    //     // formData.set(prdtname, value);
    //     setValues({ ...values, [prdtname]: value });
    // };

    const handleChange = prdtname => event =>{
        const value = event.target.value
        // formData.set(prdtname,value)
        setValues({...values,[prdtname]: event.target.value });
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error:'', loading:true});
        createProduct(user.userid,token,{prdtname,descn,brand,price,gstper,offer,catgy,qty,video,imgpath1,imgpath2})
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error});
            }else {
                setValues({
                    ...values,
                    prdtname:'',
                    descn:'',
                    brand: '',
                    catgy:'',
                    price:'',
                    gstper:'',
                    qty: '',
                    offer: '',
                    imgpath1:'',
                    imgpath2:'',
                    video:'',
                    loading:false,
                    created:data.prdtname       
                });
            }
        });
    };

 
    const addProductForm = () =>( 
        
            <div className="card mx-auto" style={{maxWidth:"520px", marginTop:"40px"}}>
                <article className="card-body">
                    <header className="mb-4"><h4 className="card-title">Create Product</h4></header>
                    <form onSubmit={clickSubmit}>
                        <div className="form-row">
                            <div className="col form-group">
                                <label>Product Name</label>
                                <input onChange={handleChange('prdtname')} type="text" name="prdtname" value={prdtname} className="form-control" style={{textTransform:"capitalize"}} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input onChange={handleChange('descn')} type="text" name="descn"value={descn} className="form-control" style={{textTransform: "capitalize"}} />
                        </div>
                        <div className="form-row">
                            <div className="col form-group">
                                <label>Price</label>
                                <input  onChange={handleChange('price')}type="number"name="price" value={price} className="form-control" />
                            </div>
                            <div className="col form-group">
                                <label>GST %</label>
                                <input onChange={handleChange('gstper')} type="number" name="gstper" value={gstper} className="form-control" />
                            </div> 
                            <div className="col form-group">
                                <label>Offer %</label>
                                <input onChange={handleChange('offer')} type="number" value={offer} name="offer"className="form-control"onchange="handleChange(this);" />
                            </div> 
                            
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label>Category</label>
                            <select onChange={handleChange('catgy')} id="inputState" name ="catgy" value={catgy} className="form-control">
                                <option selected=""> Choose...</option>
                                <option>Grocery</option>
                                <option> Vegetables & Fruits</option>
                                <option>Kitchen Accessories</option>
                                <option>Essentials</option>
                                <option>Beverages</option>
                            </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Qty</label>
                                <input onChange={handleChange('qty')} type="number"name ="qty" value={qty} className="form-control"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col form-group">
                                <label>Brand</label>
                                <input onChange={handleChange('brand')} type="text" name="brand" value={brand} className="form-control" style={{textTransform: "capitalize"}} />
                            </div>
                        </div> 
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Image 1</label>
                                <input onChange={handleChange('imgpath1')} type="file"  name ="imgpath1"accept="image/*" />
                            </div> 
                            <div className=" form-group col-md-6">
                                <label>Image 2</label>
                                    <input onChange={handleChange('imgpath2')}  type="file"  name ="imgpath2"accept="image/*" />
                            </div> 
                        </div>
                        <div className="form-row">
                            <div className="col form-group">
                                <label>Video Link</label>
                                <input onChange={handleChange('video')} type="text" value={video} name="video" className="form-control" />
                            </div> 
                        </div>
                        
                        
                        <div className="form-group">
                            <button className="btn btn-primary btn-block"> Add Product  </button>
                        </div>  
                    </form>
                </article>
            </div>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: created ? '' : 'none' }}>
            <h2>{`${created}`} is created!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    return(
        <Layout >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {addProductForm()}
                </div>
            </div>
                
              {/* {JSON.stringify(values)} */}
        </Layout>
    );
};

export default AddProduct;





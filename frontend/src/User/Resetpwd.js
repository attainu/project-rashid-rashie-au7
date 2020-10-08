import React,{useState} from 'react';
import Layout from '../core/Layout';
import {resetpwd} from '../auth'
import {useLocation,Redirect} from 'react-router-dom';
        
const Resetpwd = () => {

    const [values,setValues] = useState({
        password: '',
        confirmpassword: '',
        error: '',
        success: false ,
        redirectToReferrer:false
    });

    const {password,confirmpassword,success,error,redirectToReferrer} = values
    const location = useLocation();
    console.log('location',location)
    const str = (location.pathname).split('resetpwd/')
    const token =str[1]

    const handleChange = password => event =>{
        setValues({...values,error:false,[password]: event.target.value });
    };

    const clickSubmit = (event) =>{
        event.preventDefault()
        setValues({...values, error: false})
        resetpwd({password},token)
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error, success:false})
            }else {
                setValues({
                    redirectToReferrer:true,
                    success: true 
                })
            }
        })
    }
const redirectUser = () => {
    if(redirectToReferrer){
        return <Redirect to="/login" /> 
    }
}

    const ResetForm = () => ( 
        <div class="card mx-auto" >
            <article class="card-body">
                <header class="mb-4"><h4 class="card-title">Reset Password</h4></header>
                <form>
                    <div class="form-row">
                        <div class="col form-group ">
                            <label  style={{color:'black'}}>New password</label>
                            <input onChange={handleChange('password')} class="form-control" name ="password" type="password" value={password} />
                        </div>
                        <div class=" col form-group ">
                            <label  style={{color:'black'}}>Repeat password</label>
                            <input onChange={handleChange('confirmpassword')} class="form-control"name="confirmpassword" type="password" value={confirmpassword} />
                        </div>
                    </div>
                    <div class="form-group">
                        <button onClick={clickSubmit} type="submit" class="btn btn-primary btn-block"> CONFIRM  </button>
                    </div>  
                </form>
            </article>
        </div> 
    );
    const showErr= () => (
        <div className = "alert alert-danger" style={{display: error? '' : 'none'}}>
            {error}
        </div>
    )

  

    return (
        <div className="container col-md-6 offset-md-3">
            {showErr()}
            {redirectUser()}
            {ResetForm()}
            </div>
      
    );   
};

export default Resetpwd;
import React,{useState} from 'react';
import Layout from '../core/Layout';
import {frgtpwd } from '../auth'
import { Redirect,Link} from 'react-router-dom';
           
const Forgotpwd = () => {

    const [values,setValues] = useState({
        email: 'rashie2012@gmail.com',
        error: '',
        redirectToReferrer:false 
    });

    const {email,error,redirectToReferrer} = values
  
    const handleChange = email => event =>{
        setValues({...values,error:false,[email]: event.target.value });
    };

    const clickSubmit = (event) =>{
        event.preventDefault()
        setValues({...values, error: false})
        console.log(email)
        frgtpwd({email})
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error})
            }else {
                setValues({
                    ...values,
                    redirectToReferrer: true 
                });
            }
        })
    }

    const forgotForm = () => ( 
        <div class="card mx-auto" >
            <article class="card-body">
                <header class="mb-4"><h4 class="card-title">Forgot Password</h4></header>
                <form> 
                    <div>
                        <label style={{color:'black'}}>Email</label>
                        <input onChange={handleChange('email')} type="email" name="email" class="form-control" value={email}></input>
                    </div>
                    <br>
                    </br>
                    <div class="form-group">
                        <button onClick={clickSubmit} type="submit" class="btn btn-primary btn-block"> Submit  </button>
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

    const redirectUser = () => {
        if(redirectToReferrer){
            return <Redirect to="/seller" />
        }
    }
    const signinLink= ()=>{
        return( 
            <div style={{color:"#1b6356",textAlign:"center"}}>  Click
            <Link to="/login" style={{color:"#e60e8a"}}> here </Link> to login.
        </div>)
    }

  
    return (
            <div className="container col-md-6 offset-md-3">
            {showErr()}
            {forgotForm()}
            {redirectUser()}
            {signinLink()}
        </div>
    );   
};

export default Forgotpwd;
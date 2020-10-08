import React,{useState} from 'react';
import Layout from '../core/Layout';
import {signup} from '../auth'
import {Link} from 'react-router-dom';
           
const Signup = () => {

    const [values,setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        usertype: '',
        password: '',
        confirmpassword: '',
        error: '',
        success: false 
    });

    const {firstname,lastname,email,usertype,password,confirmpassword,success,error} = values

    const handleChange = firstname => event =>{
        setValues({...values,error:false,[firstname]: event.target.value });
    };

    const clickSubmit = (event) =>{
        event.preventDefault()
        setValues({...values, error: false})
        signup({firstname,lastname,email,usertype,password,confirmpassword })
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error, success:false})
            }else {
                setValues({
                    ...values,
                    firstname: '',
                    lastname: '',
                    email: '',
                    usertype: '',
                    password: '',
                    confirmpassword: '',
                    error: '',
                    success: true 
                })
            }
        })
    }

    const signUpForm = () => ( 
        <div class="card mx-auto" >
            <article class="card-body">
                <header class="mb-4"><h4 class="card-title">Sign up</h4></header>
                <form>
                    <div className="form-row">
                        <div className="col form-group">
                            <label style={{color:'black'}}>First name</label>
                            <input  onChange={handleChange('firstname')} type="text" name="firstname" className="form-control" value={firstname}></input>
                        </div>
                        <div className="col form-group">
                            <label style={{color:'black'}}>Last name</label>
                            <input onChange={handleChange('lastname')} type="text" name= "lastname" className="form-control" value={lastname} />
                        </div >
                    </div>
                    <div>
                        <label style={{color:'black'}}>Email</label>
                        <input onChange={handleChange('email')} type="email" name="email" class="form-control" value={email}></input>
                    </div>
                    <br>
                    </br>
                    <div class="form-group">
                        <label style={{color:'black'}} class="custom-control custom-radio custom-control-inline">
                            <input onChange={handleChange('usertype')} class="custom-control-input"  type="radio" name="usertype" value='1' />
                            <span class="custom-control-label"> Buyer </span>
                        </label>
                        <label style={{color:'black'}} class="custom-control custom-radio custom-control-inline">
                            <input onChange={handleChange('usertype')} class="custom-control-input" type="radio" name="usertype" value='0' />
                            <span class="custom-control-label">Seller </span>
                        </label>
                    </div>
                    <div class="form-row">
                        <div class="col form-group ">
                            <label style={{color:'black'}}>Create password</label>
                            <input onChange={handleChange('password')} class="form-control" name ="password" type="password" value={password} />
                        </div>
                        <div class=" col form-group ">
                            <label style={{color:'black'}}>Repeat password</label>
                            <input onChange={handleChange('confirmpassword')} class="form-control"name="confirmpassword" type="password" value={confirmpassword} />
                        </div>
                    </div>
                    <div class="form-group">
                        <button onClick={clickSubmit} type="submit" class="btn btn-primary btn-block"> Register  </button>
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

    const showMsg= () =>(
        <div className = "alert alert-info" style={{display: success ? '' : 'none'}}>
            New Account is Created! Please click <Link to="/login">here </Link>to Signin
        </div>
    )
    
    const siginLink= ()=>{
        return( 
            <div style={{color:"#1b6356", textAlign:"center"}}> Already a user? Click
            <Link to="/login" style={{color:"#e60e8a"}}> here </Link> to Login.
        </div>)
       
    }

    return (
        <div className="container col-md-6 offset-md-3 mt-3" >
            {showErr()}
            {showMsg()}
            {signUpForm()}
            {siginLink()}

        </div>
    );   
};

export default Signup;
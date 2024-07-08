import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = (props) => {
    const [credentials, setcredentials] = useState({email:'',password:''})
    let navigate =useNavigate()
    const handleSubmit  = async (e) => {
        e.preventDefault(); 
          
          const response = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})


        });
        const json =await response.json();
        console.log(json);
        if(json.success){
            //save the auth taken and redirect
            localStorage.setItem('token',json.authtoken);
            navigate('/');
            props.showAlert("Logged in Successfully","success");

        }
        else{
            props.showAlert("Invalid Credientials","danger");
        }
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
      }
        
    return (

        <div className='mt-3'>
            <h2>Login to continue to iNotebook </h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" value={credentials.email} name="email"id="email"  autoComplete='email' aria-describedby="emailHelp"   onChange={onChange} />
                
            </div>
            <div className="mb-3">
                <label htmlFor="Password" className="form-label">Password</label>
                <input type="password" className="form-control" value={credentials.password} name='password' autoComplete='current-password' id="password"  onChange={onChange} />
            </div>
           
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form></div>
    )
}

export default Login


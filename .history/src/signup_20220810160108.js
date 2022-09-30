import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from '../src/config/firebase';
import {signInWithGoogle} from "./config/firebase";
import './App.css';
import google from "./img/g-login.jpg"



function SignUp(){

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState("");

  
    
    let navigate =useNavigate();

    const Register=(()=>{

        createUserWithEmailAndPassword(auth , email, password).then(()=>{
            navigate('/Addtodo')
        }).catch((error)=>{
            console.log(error);
        })

     
    });

    return(
        <div className="container">
            <div className='leftcontainer'>

            </div>
            <div className='rightcontainer'>
            <h1>Register Account</h1>
            <input className='myInputs' type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>

            <input className='myInputs'  type="password" placeholder="Enter your password"  onChange={(e)=>setPassword(e.target.value)}/>
            
            <button onClick= {Register}>Create acount</button>
            <span>or</span>
            
            <button  onClick={signInWithGoogle}><div className='fri'><img src={google} className="logo" /><div className='tex'>Sign In With Google</div></div></button>
            </div>
            </div>
    );
    
      
}
export default SignUp
import React ,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './config/firebase';
import {signInWithGoogle} from "./config/firebase";
import google from "./img/logo.png"


function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState("")

    let history =useHistory();
 
    const login=(()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push('/todo');
        }).catch((error)=>{
                console.log(error);
        })

     
    })




    return(
        
        <div className="container">
            <div className='leftcontainer'>
           
            
            </div>
            <div className='rightcontainer'>
            <span className="heading">Welcome Back</span>
            <span className="heading2" >Manage Your Task Checklist Easily</span>
           <label>Email</label>
            <input type="email" placeholder="Enter your email"onChange={(e)=>setEmail(e.target.value)} /><br></br>
           <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
            
            <button className='button2' onClick={login} >
                Log in{" "}
            </button>
            <span>Don't have an account<Link to="./sign-up"> Create account here</Link></span>{" "} 
            

             <span>or</span>
            
            <button  onClick={signInWithGoogle}  ><div className='fri'><img src={google} className="logo" /><div className='tex'>Sign In With Google</div></div></button>
           
            
        </div>
           
            </div>
       );  
}
export default Login
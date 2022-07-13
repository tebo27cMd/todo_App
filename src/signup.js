import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from '../src/config/firebase';
import {signInWithGoogle} from "./config/firebase";
function SignUp(){

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState("");

  
    
    let history = useHistory();

    const Register=(()=>{

        createUserWithEmailAndPassword(auth , email, password).then(()=>{
            history.push('/todo');
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
            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>

            <input type="password" placeholder="Enter your password"  onChange={(e)=>setPassword(e.target.value)}/>
            
            <button onClick= {Register}>Create acount</button>
            <span>or</span>
            
            <button  onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
            </div>
    );
    
      
}
export default SignUp
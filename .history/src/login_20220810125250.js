import React ,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './config/firebase';
import {signInWithGoogle} from "./config/firebase";
import google from "./img/g-login.jpg"
import './App.css';


 function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState("")

    let navigate =useNavigate();
 
    const login=(()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
          navigate("/addtodo")
        }).catch((error)=>{
                console.log(error);
        })

     
    })
    return(
        
        <div className="container">
            <div className='leftcontainer'>
           
            
            </div>
            <div className='rightcontainer'>
                <form></form>
         
           
            
        </div>
           
            </div>
       );  
}
export default Login
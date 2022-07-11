import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from '../src/config/firebase'

function SignUp(){

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState("");

    const btn={
        width:'190px',
        height:'30px',
        marginTop:'2%'
    }
    
    let history = useHistory();

    const Register=(()=>{

        createUserWithEmailAndPassword(auth , email, password).then(()=>{
            history.push('/homepage');
        }).catch((error)=>{
            console.log(error);
        })

     
    });

    return(
        <div className="container">
            <h1>Register Account</h1>
            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>

            <input type="password" placeholder="Enter your password"  onChange={(e)=>setPassword(e.target.value)}/>
            
            <button style={btn} onClick= {Register}>Create acount</button>
            </div>
    );
    
      
}
export default SignUp
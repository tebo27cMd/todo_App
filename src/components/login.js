import React ,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../src/config/firebase'

function Login(){

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState("")

    const btn={
        width:'190px',
        height:'30px',
        marginTop:'2%'
    }

    let history = useHistory();

    const login=(()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push('/homepage');
        }).catch((error)=>{
                console.log(error);
        })

     
    })

    return(
        <div className="container">
            <h1>Login</h1>
            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>

            <input type="password" placeholder="Enter your password"  onChange={(e)=>setPassword(e.target.value)}/>

            <button style={btn} onClick={login}>
                Log in{" "}
            </button>

            <span>Don't have an account</span>{" "} 
            <span>

                 <Link to="/sign-up"> Create account here</Link>
              
             </span>
             <span>Forgot password ?</span>{" "} 
            <span>

                 <Link to="/forgot"> Click here</Link>
              
             </span>
            </div>
       );  
}
export default Login
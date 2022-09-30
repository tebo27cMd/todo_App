import React, { useState } from 'react'

import './LoginPage.css';
import google from '../image/i.png'
import {Link} from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../Config-file/firebase";
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let history = useNavigate();

const SignInPage = (()=>{
  signInWithEmailAndPassword(auth, email, password).then(()=>{
     
      history("/HomePage");
  }).catch((error)=>{
    console.log(error);
  })
})
  


  return (
    <div className='LoginPage'>

        <aside></aside>

        <section>
            <h1 className='welcome'>Welcome Back</h1>

            <p className='paragraph1'>Manage Your Task Checklist Easily</p>

            <div className='input-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email"  placeholder='Enter email here...' 
                    onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className='input-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password"  placeholder='Enter password here...' 
                    onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            <button className='lgnBtn' onClick={SignInPage}>Login</button>

            <p className='create'>Don't have an account? <span><Link to={"/SignInPage"}>Create one</Link></span></p>

            <h1 className='or'>OR</h1>

            <button className='signBtn'><div className='logo'><img src={google} alt="" /><span><div>Sign in with google</div></span></div></button>
            

          

        </section>
        
    </div>
  )
}

export default LoginPage;
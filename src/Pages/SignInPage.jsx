import React, { useState } from "react";
import { db } from "../Config-file/firebase";
import { auth } from "../Config-file/firebase";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './LoginPage.css';

const SignInPage = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState("");
        const [fullname, setFullname] = useState("");

        let history =useNavigate();


        const Register = (() =>{
                createUserWithEmailAndPassword(auth, email, password).then(()=>{
                        alert("created");
                        history("/HomePage");
                       
                }).catch((error)=>{
                        console.log(error);
                })
        })


    

  return (
    <div className='LoginPage'>

        <aside></aside>

        <section>
            <h1 className='welcome'>Welcome</h1>

            <p className='paragraph1'>Manage Your Task Checklist Easily</p>


            <div className='input-control'>
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text"  placeholder='Enter fullname here...'  onChange={(e)=>setFullname(e.target.value)} />
            </div>

            <div className='input-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email"  placeholder='Enter email here...'  onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className='input-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password"  placeholder='Enter password here...'  onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <button className='lgnBtn' onClick={Register}>Create Account</button>

            <p className='create'>Already have an account? <Link to={"/"}>Log in</Link></p>

            <h1 className='or'>OR</h1>

            <button className='signBtn'>Sign up with google</button>

          

        </section>
        
    </div>
  )
}

export default SignInPage;
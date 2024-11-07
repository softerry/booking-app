import React from "react";
import {Icon} from 'react-icons-kit'
import {facebook} from 'react-icons-kit/icomoon/facebook'
import {google} from 'react-icons-kit/icomoon/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavBar } from "./navbar";
import { Footer } from "./footer";




function Login(){
    // create  state to hide and show password
    const [pass, setPassword] = useState('password');
    const [icon, setIcon] = useState(faEyeSlash);

    // create a toggle click icon to show and hide password
    const toggleIcon = () =>{
        if(pass === 'password'){
            setPassword('text');
            setIcon(faEye);
        }else{
            setPassword('password');
            setIcon(faEyeSlash);
        }
    }
    return(
        <>
            <NavBar/>
            <div id="main-login"> 
             <div className='login-container'>
                {/* // login form */}
                 <form className="login-form">
                <h2>Login</h2>
                <div className="login-social-media-icon">
                    <a href="#" className="media-icon"><Icon size={'20px'} icon={facebook}/></a>
                    <a href="#" className="media-icon"><Icon size={'20px'} icon={google}/></a>
                </div>
                       <p className="login-option">-- or -- </p>
                        
                <div className="login-input-container">
                    <span className="user-icon"><FontAwesomeIcon icon={faUser} /></span>
                    <input type="text" id='username' name="username" placeholder="E-mail"required/>
                </div>
                <div className="login-input-container">
                    <span className="user-icon"><FontAwesomeIcon icon={faKey}/></span>
                    <input type={pass} id='password' name='password' placeholder="Password" required/>
                    <span className="password-eye"><FontAwesomeIcon icon={icon} onClick={toggleIcon}/></span>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="login-checkbox"/><label>Remember Me</label>
                </div>
                           <button id='login-btn'type='submit'>Login</button>
                <p className="signup-text">Don't have an account? <a href="#">sign up</a></p>
            </form>
        </div>
      
        </div>

        {/* Footer */}
        <Footer/>
        </>
        
       
    )
}

export default Login;
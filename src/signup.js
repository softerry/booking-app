import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Icon} from 'react-icons-kit'
import {facebook} from 'react-icons-kit/icomoon/facebook'
import {google} from 'react-icons-kit/icomoon/google'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



function Signup (){
  // create a toggle click icon to show and hide password
  // create  state to hide and show password
    const [password, setPassword] = useState('password');
    const [passwordIcon, setPasswordIcon] = useState(faEyeSlash);
    const [repeatPasswordIcon, setRepeatPasswordIcon]  = useState(faEyeSlash)
    const [repeatPassword, setRepeatPassword] = useState('password');

    // create a toggle click icon to show and hide password
    const passwordToggleIcon = () =>{
        if(password === 'password'){
            setPassword('text');
            setPasswordIcon(faEye);
        }
        else{
            setPassword('password');
            setPasswordIcon(faEyeSlash);
        }
    }
    const repeatPasswordToggleIcon = () =>{
        if(repeatPassword === 'password'){
            setRepeatPassword('text')
            setRepeatPasswordIcon(faEye);
        }else{
            setRepeatPassword('password')
            setRepeatPasswordIcon(faEyeSlash);
        }

    }

 
    return (
        <div className="signup-container">
            <form className="signup-form" href='#'>
                <p className="signup-p-text"> Already a member <a href=''> sign in</a></p>
                <h2 className="signup-h2">Sign Up</h2>
                <div className="signup-social-icon">
                        <a href="#" className="media-icon"><Icon size={'20px'} icon={facebook}/></a>
                        <a href="#" className="media-icon"><Icon size={'20px'} icon={google}/></a>
                </div>
                <p className="signup-option">-- or -- </p>
                <div className="signup-input-container">
                        <label>First Name:</label>
                        <input type="text" placeholder="First Name" required/>
                </div>
                <div className="signup-input-container">
                        <label>Last Name:</label>
                        <input type="text" placeholder="Last Name" required/>
                </div>
                <div className="signup-input-container">
                        <label>Others:</label>
                        <input type="text" placeholder="Others"/>
                </div>
                <div className="signup-input-container">
                        <label>Date of Birth:</label>
                        <input type='date'  placeholder=""/>
                </div>

                <div className="signup-input-container">
                        <label>Phone Number:</label>
                        <input type='number' placeholder="Phone Number" required/>
                </div>
                <div className="signup-input-container">
                        <label>E-mail:</label>
                        <input type='email' placeholder="E-mail"/>
                </div>
                <div className="signup-input-container">
                    <label>Password</label>
                        <input type={password} placeholder="Password"/>
                        <span className="password-eye"><FontAwesomeIcon icon={passwordIcon} onClick={passwordToggleIcon}/></span>
                </div>
                <div className="signup-input-container">
                        <label>Repeat Password</label>
                        <input type={repeatPassword}  placeholder="Repeat password"/>
                        <span className="password-eye" ><FontAwesomeIcon icon={repeatPasswordIcon} onClick={repeatPasswordToggleIcon}/></span>
                </div>
                <div className="signup-checkbox">
                        <input type="checkbox"/> <label><a href="#">Terms and Condition</a></label>
                </div>
                <div className="signup-submit">
                    <input type="submit" value='submit'/>
                </div>
        </form>

        </div>
        
    )
}

export default Signup;
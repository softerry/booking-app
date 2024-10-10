import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Icon} from 'react-icons-kit'
import {facebook} from 'react-icons-kit/icomoon/facebook'
import {google} from 'react-icons-kit/icomoon/google'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";



function Signup (){
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
                        <input type='password' placeholder="Password"/>
                        <span><FontAwesomeIcon icon={faEye}/></span>
                </div>
                <div className="signup-input-container">
                        <label>Repeat Password</label>
                        <input type='password'  placeholder="Repeat password"/>
                        <span ><FontAwesomeIcon icon={faEye}/></span>
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
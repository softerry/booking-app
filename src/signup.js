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
        <form href='#'>
            <p> Already a member <a href=''> sign in</a></p>
            <h2>Sign Up</h2>
            <div className="">
            <a href="#" className=""><Icon size={'20px'} icon={facebook}/></a>
            <a href="#" className=""><Icon size={'20px'} icon={google}/></a>
            </div>
            <p className="signup-option">-- or -- </p>
            <div className="">
                <label>First Name</label>
                <input type="text" placeholder="First Name" required/>
            </div>
            <div className="">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" required/>
            </div>
            <div className="">
                <label>Others</label>
                <input type="text" placeholder="Others"/>
            </div>
            <div className="">
                <label>Date of Birth</label>
                <input type='date' placeholder=""/>
            </div>
            <fieldset>
            <div className="">
                <label><FontAwesomeIcon icon={faPhone} /></label>
                <input type='number' placeholder="Phone Number" required/>
            </div>
                <div className="">
                 <label><FontAwesomeIcon icon={faUser} /></label>
                 <input type='text' placeholder="Username"/>
                </div>
                <div className="">
                    <label><FontAwesomeIcon icon={faEnvelope}/></label>
                    <input type='email' placeholder="E-mail"/>
                </div>
                <div className="">
                <label><FontAwesomeIcon icon={faLock}/></label>
                    <input type='password'placeholder="Password"/>
                    <span><FontAwesomeIcon icon={faEye}/></span>
                </div>
                <div className="">
                    <label><FontAwesomeIcon icon={faLock}/></label>
                    <input type='password' placeholder="Repeat password"/>
                    <span><FontAwesomeIcon icon={faEye}/></span>
                </div>
            </fieldset>
            <div className="">
            <input type="checkbox"/> <label><a href="#">Terms and Condition</a></label>
            </div>
            <div>
                <input type="submit" value='submit'/>
            </div>

        </form>
    )
}

export default Signup;
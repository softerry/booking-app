import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Icon} from 'react-icons-kit'
import {facebook} from 'react-icons-kit/icomoon/facebook'
import {google} from 'react-icons-kit/icomoon/google'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



function Signup (){
  // hook states 
    const [passwordEye, setPasswordEye] = useState('password');
    const [passwordIcon, setPasswordIcon] = useState(faEye);
    const [repeatPasswordIcon, setRepeatPasswordIcon]  = useState(faEye)
    const [repeatPasswordEye, setRepeatPasswordEye] = useState('password');
    const [match, setMatch] = useState(null); // state to track if passwords match
    const [password, setPassword] = useState('password');
    const [repeatPassword, setRepeatPassword] = useState('password');

    // handler for hide and show password
    const passwordToggleIcon = () =>{
        if(passwordEye === 'password'){
            setPasswordIcon(faEyeSlash);
            setPasswordEye('text');
            
        }else{
            setPasswordEye('password');
            setPasswordIcon(faEye);
        }
    }
      // handler for hide and show repeat password
    const repeatPasswordToggleIcon = () =>{
        if(repeatPasswordEye === 'password'){
            setRepeatPasswordEye('text')
            setRepeatPasswordIcon(faEyeSlash);
        }else{
            setRepeatPasswordEye('password')
            setRepeatPasswordIcon(faEye);
        }

    }
    // handler for password input change
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
        checkPasswordMatch(e.target.value, repeatPassword)
    }

    // handler for repeat password input change
    const handleRepeatPasswordChange = (e)=>{
        setRepeatPassword(e.target.value)
        checkPasswordMatch(password, e.target.value);
    }
    // function to check if password and repeatPassword match

    const checkPasswordMatch = (pass, repPassword) => {
        if(pass === repPassword && pass !== ""){
            setMatch(true); // passwords match
        }else{
            setMatch(false); // passwords do not much 
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
                        <input  type={passwordEye} placeholder="Password" onChange={handlePasswordChange}/>
                        <span className="password-eye"><FontAwesomeIcon icon={passwordIcon} onClick={passwordToggleIcon}/></span>
                      
                </div>
                <div className="signup-input-container">
                        <label>Repeat Password</label>
                        <input type={repeatPasswordEye}  placeholder="Repeat password" onChange={handleRepeatPasswordChange}/>
                        <span className="password-eye" ><FontAwesomeIcon icon={repeatPasswordIcon} onClick={repeatPasswordToggleIcon}/></span>
                        <span className="">{match === null ? (<p>Passwords must match in both fields</p>): match ? (<p>{<FontAwesomeIcon icon={faCheck}/>} Passwords Match</p>):(<p><FontAwesomeIcon icon={faXmark} />Passwords do not match!</p>)}</span>
                      
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
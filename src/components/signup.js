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
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "./navbar";
import { Footer } from "./footer";



function Signup (){
  // hook states 
    const [passwordEye, setPasswordEye] = useState('password');
    const [passwordIcon, setPasswordIcon] = useState(faEye); // default to faEye
    const [repeatPasswordIcon, setRepeatPasswordIcon]  = useState(faEye) // default to faEye
    const [repeatPasswordEye, setRepeatPasswordEye] = useState('password');
    const [match, setMatch] = useState(null); // state to track if passwords match
    const [password, setPassword] = useState('password');
    const [repeatPassword, setRepeatPassword] = useState('password');
    const [isLower, setIsLower] = useState(null);
    const [isnumber, setIsNumber] = useState(null);
    const [isUpper, setIsUpper] = useState(null);
    const [isSpecial, setIsSpecial] = useState(null);
    const [isLength, setIsLength] = useState(null);

      // Regex for password validation
      const lower = /(?=.*[a-z])/;
      const num = /(?=.*\d)/;
      const upper = /(?=.*[A-Z])/;
      const special = /(?=.*[@$!%*?.&])/;
      const length = /(.{8,})/;

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
        const value = e.target.value;
        setPassword(value);
        checkPasswordMatch(value, repeatPassword)

    // Check if password matches the regex
  
    
      setIsLower(lower.test(value));
      setIsNumber(num.test(value));
      setIsUpper(upper.test(value));
      setIsSpecial(special.test(value));
      setIsLength(length.test(value));
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
        <>
        {/* Navigation bar */}
            <NavBar/>
     <div className="signup-container">
            <form className="signup-form" action='#'>
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
                        {/* Lowercase */}
                        <span>
                            {isLower === null ? null : isLower ? (<p style={{ color: 'green' }}><FontAwesomeIcon icon={faCircleCheck}/>Password is valid!</p>) : (<p style={{ color: 'red' }}><FontAwesomeIcon icon={faCircleXmark}/> Lower Case.</p>)}               
                        </span>
                        {/* UpperCase */}
                        <span>
                            {isUpper === null ? null : isUpper ? (<p style={{ color: 'green' }}><FontAwesomeIcon icon={faCircleCheck}/>Password is valid!</p>) : (<p style={{ color: 'red' }}><FontAwesomeIcon icon={faCircleXmark}/>Upper Case.</p>)}
                        </span>
                        {/* Number */}
                        <span>
                            {isnumber === null ? null : isnumber ? (<p style={{ color: 'green' }}><FontAwesomeIcon icon={faCircleCheck}/>Password is valid!</p>) : (<p style={{ color: 'red' }}><FontAwesomeIcon icon={faCircleXmark}/>Number.</p>)}
                        </span>
                        {/* special Character */}
                        <span> 
                            {isSpecial === null ? null : isSpecial ? (<p style={{ color: 'green' }}><FontAwesomeIcon icon={faCircleCheck}/>Password is valid!</p>) : (<p style={{ color: 'red' }}><FontAwesomeIcon icon={faCircleXmark}/>special.</p>)}
                        </span>
                        {/* password Length */}
                        <span>
                            {isLength === null ? null : isLength ? (<p style={{ color: 'green' }}><FontAwesomeIcon icon={faCircleCheck}/>Password is valid!</p>) : (<p style={{ color: 'red' }}><FontAwesomeIcon icon={faCircleXmark}/>Length.</p>)}
                        </span>
                      
                </div>
                <div className="signup-input-container">
                        <label>Repeat Password</label>
                        <input type={repeatPasswordEye}  placeholder="Repeat password" onChange={handleRepeatPasswordChange}/>
                        <span className="password-eye" ><FontAwesomeIcon icon={repeatPasswordIcon} onClick={repeatPasswordToggleIcon}/></span>
                        <span className="">{match === null ? (<p>Passwords must match in both fields</p>): match ? (<p>{<FontAwesomeIcon icon={faCheck} color="green"/>} Passwords Match</p>):(<p><FontAwesomeIcon icon={faXmark} color="red" />Passwords do not match!</p>)}</span>
                      
                </div>
                <div className="signup-checkbox">
                        <input type="checkbox" id="check-box"/> <label><a href="#">Terms and Condition</a></label>
                </div>
                <div className="signup-submit">
                    <input type="submit" value='submit'/>
                </div>
        </form>
         {/* footer */}
        <Footer/>
        </div>
        </>
        
        
    )
}

export default Signup;
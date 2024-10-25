import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCircleXmark, faCircleCheck} from "@fortawesome/free-regular-svg-icons";




function EyeButton() {
  const [pass, setPass] = useState("");
  const [rep, setRep] = useState("");
  const [icon, setIcon] = useState(faEye); // default to faEye
  const [password, setPassword] = useState('');
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
  
    const handlePasswordChange = (e) => {
      const value = e.target.value;
      setPassword(value);
      
      // Check if password matches the regex
    
      setIsLower(lower.test(value));
      setIsNumber(num.test(value));
      setIsUpper(upper.test(value));
      setIsSpecial(special.test(value));
      setIsLength(length.test(value));
    }


  return (
    <form>
      {/* <input 
        type="password" 
        value={pass} 
        onChange={handlePasswordChange} 
        placeholder="Enter Password" 
      /> */}
      {/* <input 
        type="password" 
        value={rep} 
        onChange={handleRepeatPasswordChange} 
        placeholder="Repeat Password" 
      /> */}
          {/* <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      /> */}
      {/* <span className="icon"> */}
        {/* <p><FontAwesomeIcon icon={regIcon}/>password must contain a single digit from 1 to 9.</p>
        <p>password must contain one lowercase letter.</p>
        <p>password must contain one uppercase letter.</p>
        <p>password must contain one special character.</p>
        <p>Password must be 8 characters long</p> */}

{/* {isValid === null ? null : isValid ? (
        <p style={{ color: 'green' }}>Password is valid!</p>
      ) : (
        <p style={{ color: 'red' }}>
          Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.
        </p>
      )} */}

      {/* </span> */}
      <div>
      <h2>Password Validation</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <span>{isLower === null ? null : isLower ? (
        <p style={{ color: 'green' }}><FontAwesomeIcon icon={faCircleCheck}/>Password is valid!</p>
      ) : (
        <p style={{ color: 'red' }}>
        <FontAwesomeIcon icon={faCircleXmark}/> Lower Case.
        </p>
      )} </span>
      {isnumber === null ? null : isnumber ? (
        <p style={{ color: 'green' }}>Password is valid!</p>
      ) : (
        <p style={{ color: 'red' }}>
          Number.
        </p>
      )}
      {isUpper === null ? null : isUpper ? (
        <p style={{ color: 'green' }}>Password is valid!</p>
      ) : (
        <p style={{ color: 'red' }}>
         Upper Case.
        </p>
      )}
      {isLength === null ? null : isLength ? (
        <p style={{ color: 'green' }}>Password is valid!</p>
      ) : (
        <p style={{ color: 'red' }}>
          Length.
        </p>
      )}
       {isSpecial === null ? null : isSpecial ? (
        <p style={{ color: 'green' }}>Password is valid!</p>
      ) : (
        <p style={{ color: 'red' }}>
          special.
        </p>
      )}
      
    </div>
    </form>
  );
}

export default EyeButton;

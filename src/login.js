import React from "react";


function Login(){
    return(
        <div className='login-container'>
            <form className="login-form">
                <h2>Login</h2>
                <div className="input-field">
                    <input type="text" id='username' name="username" placeholder="E-mail"required/>
                </div>
                <div className="input-field">
                    <input type="password" id='password' name='password' placeholder="Password" required/>
                </div>
                <button type='submit'>Login</button>
                <p className="signup-text">Don't have an account? <a href="#">sign up</a></p>

            </form>

        </div>
    )
}

export default Login;
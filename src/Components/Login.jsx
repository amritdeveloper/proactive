import React from 'react';
import './Login.css'; // Import CSS file for styling

function Login() {
    return (
        <div className="container">
            <div className="logo">
                <img src="logo.avif" alt="Logo" />
            </div>
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="textbox">
                        <input type="text" placeholder="Username" name="username" required />
                    </div>
                    <div className="textbox">
                        <input type="password" placeholder="Password" name="password" required />
                    </div>
                    <input type="submit" className="btn" value="Sign In" />
                </form>
                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
            <div className="signup-link">
                <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </div>
    );
}

function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission here
}

export default Login;

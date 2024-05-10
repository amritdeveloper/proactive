import React, { useState } from 'react';
import './SignUp.css'; // Import CSS file for styling

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log(formData);
        // Reset form fields
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="textbox">
                        <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="textbox">
                        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="textbox">
                        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="textbox">
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                    <input type="submit" className="btn" value="Sign Up" />
                </form>
            </div>
        </div>
    );
}

export default Signup;

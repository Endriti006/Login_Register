import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({ username: "", password: "", confirmPassword: "" });
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleClick = (field) => {
        setShowPassword(previousState => ({ ...previousState, [field]: !previousState[field] }));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(previousFormData => ({ ...previousFormData, [name]: value }));
    }

    const toggleForm = () => {
        setIsRegister(previousIsRegister => {
            setShowPassword({ password: false, confirmPassword: false });
            setFormData({ username: "", password: "", confirmPassword: "" });
            setRegistrationSuccess(false);
            return !previousIsRegister;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            setRegistrationSuccess(true);
            setFormData({ username: "", password: "", confirmPassword: "" });
        } else {
            // Handle login process
        }
    };

    return (
        <div className="wrapper">
            {registrationSuccess && (
                <div className="success-message">
                    Check your email for a verification link.
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <h1>{isRegister ? "Register" : "Login"}</h1>
                <div className="input-box">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type={showPassword.password ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <FaLock className="icon" />
                    <div className="icons" onClick={() => handleClick('password')}>
                        {showPassword.password ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div>
                {isRegister && (
                    <div className="input-box">
                        <input
                            type={showPassword.confirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <FaLock className="icon" />
                        <div className="icons" onClick={() => handleClick('confirmPassword')}>
                            {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                )}
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">{isRegister ? "Register" : "Login"}</button>
                <div className="register-link">
                    <p>{isRegister ? "Already have an account?" : "Don't have an account?"}
                        <a href="#" onClick={toggleForm}>{isRegister ? "Login" : "Register"}</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;

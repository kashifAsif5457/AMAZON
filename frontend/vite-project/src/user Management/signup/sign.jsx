import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './signup.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (password !== confirmpassword) {
            alert("Passwords do not match!");
            return;
        }

        if (!email.includes('@')) {
            alert("Please enter a valid email address!");
            return;
        }

        try {
            const payload = { name, email, password };
            const response = await axios.post("http://localhost:3006/api/v1/register", payload);

            // Save user data to local storage
            localStorage.setItem("userData", JSON.stringify({
                name: response.data.name || name,
                email: email
            }));

            alert("Signup successful! ");
            navigate('/login');
        } catch (error) {
            alert("Signup failed: " + (error.response?.data?.message || error.message || "Unknown error"));
        }
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input
                    className="inputdiv2"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br /><br />
                <input
                    className="inputdiv2"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br /><br />
                <input
                    className="inputdiv2"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br /><br />
                <input
                    className="inputdiv2"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <br /><br />
                <button type="submit" className="btn-signup">Signup</button>
            </form>
        </div>
    );
};

export default Signup;

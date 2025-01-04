import React, { useState } from 'react';
import axios from "axios";

import './Login.css';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        console.log("Sending payload:", { email, password });

        try {
            const response = await axios.post(
                "http://localhost:3006/api/v1/login",
                { email, password }, // Payload
                { headers: { "Content-Type": "application/json" } } // Headers
            );

            if (response.data.success) {
                alert("Login successful! Name: " + response.data.name);
                console.log("Name stored:", response.data.name);
                // Uncomment to save token
                localStorage.setItem("token", response.data.token);
                console.log("Response success status:", response.data.success);
                console.log("Response name:", response.data.name);
                navigate("/");
            } else {
                alert(response.data.message || "Login failed!");
            }
        } catch (error) {
            console.error("Login error details:", error.response?.data || error.message);
            alert(
                error.response?.data?.message || "An error occurred during login. Please try again."
            );
        }
    };





    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}> 
                <input
                    className="inputdiv2"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                    required
                />
                <br /><br />
                <input
                    className="inputdiv2"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                    required
                />
                <br /><br />
                <button type="submit" className="btn-login">login</button>
        
            </form>
        </div>
    );
};

export default Login;

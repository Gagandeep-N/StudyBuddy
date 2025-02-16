import React, { useState } from "react";
import "./login.css";
import book from "../../assets/book.png";
import { loginUser, registerUser } from "../../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let userCredential ;
            if (isLogin) {
                userCredential  = await loginUser(email, password);
            } else {
                userCredential  = await registerUser(email, password);
            }
            console.log("User Credential:", userCredential); // Debugging Step

            dispatch(setUser({ id: userCredential.uid, email: userCredential.email }));
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className="container">
            <div className="card">
                <div className="form-container">
                    <div className="branding">
                        <img src={book} alt="book-logo" className="book-logo" />
                        <h3 className="app-name">StudySensei</h3>
                    </div>
                    <h1 className="title">{isLogin ? "Login" : "Signup"}</h1>
                    <p className="subtitle">{isLogin ? "Welcome back!" : "Create your account"}</p>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label htmlFor="email" className="label">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="input"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <label htmlFor="password" className="label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="input"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">{isLogin ? "Login" : "Sign Up"}</button>
                        <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
                            {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
                        </button>
                        <a href="#">Back to Home</a>  {/*we will create a Link here after we set routers*/}
                    </form>
                </div>
            </div>
        </div>
    );
}
import React, { useState } from "react";
import axios from 'axios'
import Register from './Register'
export const Login = (props) => {
    const [email, setEmail] = useState();
    const [password, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName) => {
        setCurrentForm(formName);
      }
    const login=(e)=>{
         e.preventDefault()
         let obj={
            email:email,
            password:password
         }
         axios.post("http://localhost:3000/login",obj).then((res)=>{
            console.log(res)
            localStorage.setItem('token',res.data.data.token)
            localStorage.setItem('user',JSON.stringify(res.data.data))
            // window.location('/dashboard')
         }).catch((err) => { alert(err.response.data.message) })
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form method='POST' className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={login}>LogIn</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
           {/* <button className="link-btn" onClick={Register}>Register</button> */}
        </div>
    )
}
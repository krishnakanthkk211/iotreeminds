import React, { useState } from "react";
import axios from 'axios'
export let Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    

    let register=(e)=>{
        e.preventDefault()
        let obj={
           email:email,
           password:password,
           name:name
        }
        console.log(obj)
        axios.post("http://localhost:4000/register",obj).then((res)=>{
           alert('registered successfully')
         window.location('/Dashboard')
        }).catch((err) => { alert(err.response.data.message) })
   }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            {/* <button type="submit"onClick={register}>Register</button> */}
            <button type="submit" onClick={register}>Register</button>
                   <a id='logins' href='/'>Login</a> 
        </form>
        {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
       
                    {/* <a id='logins' href='/'>Login</a> */}
    </div>
    )
}


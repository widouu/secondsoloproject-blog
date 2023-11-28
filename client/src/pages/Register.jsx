import React from "react";
import { Link } from "react-router-dom";

const Register = () => {

    return <div className="auth">
        <h1>Register</h1>
        <form >
            <input required type="text" placeholder="usename" />
            <input required type="text" placeholder="email" />
            <input required type="text" placeholder="password" />
            <button>Register</button>
            <p>this is an error</p>
            <span> Do you have an account ? <Link to="/login"> Login</Link> </span>
        </form>

    </div>
}
export default Register;
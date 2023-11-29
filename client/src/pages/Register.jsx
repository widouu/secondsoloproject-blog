import React, { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [err, SetError] = useState(null)
    const navigate = useNavigate()


    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev, [e.target.name]: e.target.value
        })) }


    const handeleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8080/api/auth/register", inputs)
            navigate("/login")
        } catch (err) {
            SetError(err.response.data)
        }
    }



    return <div className="auth">
        <h1>Register</h1>
        <form >
            <input required type="text" placeholder="username" name="username" onChange={handleChange} />
            <input required type="text" placeholder="email" name="email" onChange={handleChange} />
            <input required type="text" placeholder="password" name="password" onChange={handleChange} />
            <button onClick={handeleSubmit}>Register</button>
            {err && <p>{err}</p>}
            <span> Do you have an account ? <Link to="/login"> Login</Link> </span>
        </form>

    </div>
}
export default Register;
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [user_email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    let navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3009/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ user_email: user_email, user_password: user_password })
        });
        const json = await response.json()
        console.log(json)

        if (json.status) {
            window.localStorage.setItem('token', json.theToken)
            //console.log(localStorage.getItem('token'));
            window.localStorage.setItem("EcomEmail", json.user_email)
            window.localStorage.setItem("EcomUserId", json.user_id)
            window.localStorage.setItem("EcomUser", json.user)

            const name = localStorage.getItem('EcomUser')
            
            if (json.role === "user") {
                alert(`Welcome ${name} to Home Decor!!`)
                navigate("/homepage") 
            }
            else {
                navigate("/vendor")
            }


        } else {
            alert("Invalid Credentials")
        }
        /* console.log((await response).status)
        if((await response).status==200){
            //localStorage.setItem('token',response.data)
            navigate("/homepage")
        }
        else{
            alert("Please enter valid data")
        } */

    }

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                        <form className="mx-1 mx-md-4" onSubmit={login}>



                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="inputEmail">Your Email</label>
                                                    <input type="email" id="inputEmail" value={user_email} className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                        onChange={(e) => { setEmail(e.target.value) }} required />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-lock fa-lg me-3 fa-fw"></i> */}
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="inputPassword">Password</label>
                                                    <input type="password" id="inputPassword" value={user_password} className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                        onChange={(e) => { setPassword(e.target.value) }} required />
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <Link to="/forgotpassword" style={{ color: "black" }}>Forget Password</Link>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <input type='submit' className="btn btn-primary btn-lg" value="Login" to="/homepage" />
                                                {/* <button type="submit" className="btn btn-primary btn-lg" onClick={login}>Login</button> */}
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <Link to="/register" style={{ color: "black" }}>Create Account</Link>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
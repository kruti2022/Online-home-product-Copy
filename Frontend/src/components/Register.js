import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {

    const [user_name, setUserName] = useState("");
    const [user_email, setUserEmail] = useState("")
    const [user_password, setUserPassword] = useState("")
    const [user_contact, setUserContact] = useState("")
    const [user_address, setUserAddress] = useState("")
    const [user_role, setUserRole] = useState("")

    const navigate = useNavigate();

    const submitDetails = () => {
        Axios.post('http://localhost:3009/register',
            {
                user_name: user_name,
                user_email: user_email,
                user_password: user_password,
                user_contact: user_contact,
                user_address: user_address,
                user_role: user_role
            })/* .then(() => {
                alert("Successfully Inserted");    
            }) */.catch(error => alert("Please Enter Valid Data"))

        //console.log(setUserName, setUserEmail, setUserAddress, setUserContact, setUserRole);
        navigate("/");
    }
    return (
        <section className="vh-400" style={{ backgroundColor: "#eee" }}>
            <div className="container h-500">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4" onSubmit={submitDetails}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-user fa-lg me-3 fa-fw"></i> */}
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="inputName">Your Full Name</label>
                                                    <input type="text" id="inputName" value={user_name} className="form-control"
                                                        onChange={(e) => { setUserName(e.target.value) }} required />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="inputEmail">Your Email</label>
                                                    <input type="email" id="inputEmail" value={user_email} className="form-control" placeholder='ex: example@gmail.com' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                        onChange={(e) => { setUserEmail(e.target.value) }} required />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-lock fa-lg me-3 fa-fw"></i> */}
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="inputPassword">Password</label>
                                                    <input type="password" id="inputPassword" value={user_password} className="form-control" placeholder='ex: Example@123 (length-8)' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                        onChange={(e) => { setUserPassword(e.target.value); }} required />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-key fa-lg me-3 fa-fw"></i> */}
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="inputNumber">Contact No</label>
                                                    <input type="tel" id="inputNumber" value={user_contact} className="form-control"  pattern='[6-9]{1}[0-9]{9}'
                                                        onChange={(e) => { setUserContact(e.target.value); }} required />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-key fa-lg me-3 fa-fw"></i> */}
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="inputAddress">Address</label>
                                                    <input type="text" id="inputAddress" value={user_address} className="form-control" onChange={(e) => {
                                                        setUserAddress(e.target.value);
                                                    }} required />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-key fa-lg me-3 fa-fw"></i> */}
                                                <div className="form-outline flex-fill mb-0">
                                                    <label value={user_role} className="form-label" htmlFor="inputRole">Select Role:</label>
                                                    <br />
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="user"
                                                            onChange={(e) => {
                                                                setUserRole(e.target.value);
                                                            }} required />
                                                        <label className="form-check-label" htmlFor="inlineRadio1">User</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="vendor"
                                                            onChange={(e) => {
                                                                setUserRole(e.target.value);
                                                            }} required />
                                                        <label className="form-check-label" htmlFor="inlineRadio2">Vendor</label>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <input type="submit" className="btn btn-primary btn-lg" value="Register" />
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <Link to="/" style={{ color: 'black' }}>Already have an account!</Link>
                                            </div>

                                        </form>

                                    </div>
                                    <div>
                                        {user_contact}
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

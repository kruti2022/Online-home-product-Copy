import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

export default function ResetPassword() {
    
    const [user_password,setUserPassword]=useState("");
    const [resetToken,setresetToken]=useState("");

    const navigate = useNavigate();

    const resetPassword=()=>{
        axios.post('http://localhost:3009/updatePassword',
        {
            resetToken:resetToken,
            user_password:user_password

        }).then(()=>{
            window.alert("Successfully Updated Your Password")
            navigate("/");   
        }).catch(error => window.alert("Please Enter Valid Data"))
    }

  return (

    <section className="vh-100" style={{backgroundColor: "#eee"}}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{borderRadius: "25px"}}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Reset Password</p>

                                        <form className="mx-1 mx-md-4" onSubmit={resetPassword}>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="token">Enter Token</label>
                                                    <input type="email" id="token" className="form-control" onChange={(e) => {setresetToken(e.target.value) }} required />    
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="new_pass"><h6>Enter New Password</h6></label>
                                                    <input type="password" id="new_pass" className="form-control" onChange={(e) => {setUserPassword(e.target.value) }} required />   
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="new_pass2"><h6>Confirm Password</h6></label>
                                                    <input type="password" id="new_pass2" className="form-control" onChange={(e) => {setUserPassword(e.target.value) }} required />   
                                                </div>
                                            </div>

                                            

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <input type="submit" className="btn btn-primary btn-lg" value="Submit"/>
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
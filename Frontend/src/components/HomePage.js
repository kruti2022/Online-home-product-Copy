import React,{useEffect,useRef,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { DataContext } from '../context/DataContext'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const {cart}=useContext(DataContext)
    const timeout = useRef(null)
    const nevigate= useNavigate()
    const checkAuth=()=>{
        axios.get("http://localhost:3009/isAuth",{
            headers:{
             "x-access-token":localStorage.getItem("token")
            }
        }).then((response)=>{
         if(!response.data.login)
         {
            nevigate("/");
         }
        })
     
     }
 
     useEffect(()=>{
        timeout.current=setTimeout(checkAuth,3600000)
        return function(){
            if(timeout.current)
            {
                clearTimeout(timeout.current)
            }
        }
     },[])
    return (
        <>
        <section className="slider_section long_section">
          <div id="customCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="detail-box">
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                        </p>
                        <div className="btn-box">
                          <a href="/about" className="btn1">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="img-box">
                        <img src="assets/images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
    )
}

export default HomePage

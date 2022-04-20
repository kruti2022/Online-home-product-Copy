import React,{useEffect,useState} from 'react'
import CardProducts from './CardProducts'
import axios from 'axios'
const AllProducts = () => {
    const [getdata, setGetdata] = useState([])
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
        timeout.current=setTimeout(checkAuth,200)
        return function(){
            if(timeout.current)
            {
                clearTimeout(timeout.current)
            }
        }
     },[])

    const getData= async ()=>{

        const res=await axios.get('http://localhost:3009/viewProducts')
        setGetdata(res.data)
    }
    useEffect(() => {
       getData()
    }, [])
    return (
        <>
        <div className="products">
            <div className="container">
                <h2 className="text-center font-weight-bold mb-5">Best Products</h2>
                <div className="row">
                    {
                        getdata.map((val,ind)=>{
                            return(
                                <>
                                 <CardProducts
                                 key={ind}
                                 product_id={val.product_id}
                        product_name={val.product_name}
                        product_price={val.product_price}
                        product_photo={val.product_photo}
                                 
                                 />

                                </>
                            )
                        })
                    }
                       
                        
                </div>
            </div>
        </div>
            
        </>
    )
}

export default AllProducts

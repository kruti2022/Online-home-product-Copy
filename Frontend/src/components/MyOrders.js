import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const MyOrders = () => {
    const [data, setData] = useState([])
    const { user_id } = useParams()

    const getData = async () => {
        const { data } = await axios.get(`http://localhost:3009//orderhistory/${user_id}`)
        setData(data)
    }
    
    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <div className="payment">
                <div className="container">
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Order Details</th>
                                        <th>Qty</th>
                                        <th>Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((val, ind) => {
                                            return (
                                                <>
                                                    <tr key={ind}>
                                                        <td>{ind + 1}</td>
                                                        <td className="tb-or">
                                                            <NavLink to={`/details/${val.product_id}`}>
                                                                <p>{val.product}</p>
                                                            </NavLink>
                                                        </td>
                                                        <td>{val.qty}</td>
                                                        <td>
                                                            {val.price}
                                                        </td>
                                                    </tr>

                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyOrders
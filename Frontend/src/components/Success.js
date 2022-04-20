import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function Success() {

    const navigate = useNavigate();

    useEffect(() =>{
        setTimeout(() => navigate('/homepage'), 3000)
    })

    return (
        <>
            <div className="d-flex justify-content-center">
                <lord-icon
                    src="https://cdn.lordicon.com/lupuorrc.json"
                    trigger="loop"
                    style={{ width: "250px", height: "250px" }}>
                </lord-icon>
            </div>

            <div className="d-flex justify-content-center">
                <hr />
                <label style={{ fontSize: '20px', fontStyle: 'italic', color: '#00997a', textAlign: 'center' }} onClick={() => navigate('/homepage')}>Successfully Purchased!!</label>
        </div>

        </>
    )

}

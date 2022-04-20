import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const DataContext = createContext()

export const ConText = (props) => {
    const [cart, setCart] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    return (
        <>
            <DataContext.Provider value={{ cart, setCart, isAuth }}>
                {props.children}
            </DataContext.Provider>

        </>
    )
}
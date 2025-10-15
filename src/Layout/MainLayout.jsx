import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout
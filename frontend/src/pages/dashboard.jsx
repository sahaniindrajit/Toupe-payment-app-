import React from 'react'
import Appbar from '../components/appbar'
import Balance from '../components/balance'
import Users from '../components/users'

function Dashboard() {
    return (
        <>
            <Appbar />
            <Balance></Balance>
            <Users></Users>
        </>
    )
}

export default Dashboard
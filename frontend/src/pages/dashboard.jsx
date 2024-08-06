import React from 'react'
import Appbar from '../components/appbar'
import Balance from '../components/balance'
import Users from '../components/users'

function Dashboard() {
    return (
        <div className='stylepage'>
            <Appbar />
            <Balance />
            <Users />
        </div>
    )
}

export default Dashboard
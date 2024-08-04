import React from 'react'
import SendBox from '../components/sendBox'

function SendMoney() {
    return (
        <div className='bg-slate-300 w-full h-screen flex justify-center'>

            <div className='flex flex-col justify-center'>

                <div className='bg-slate-100 rounded-lg w-auto text-center h-max p-4 md:w-96'>
                    <SendBox />
                </div>
            </div>
        </div>
    )
}

export default SendMoney
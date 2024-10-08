import Heading from '../components/heading.jsx'
import InputBox from '../components/inputBox.jsx'
import SubHeading from '../components/subHeading.jsx'
import Button from '../components/button.jsx'
import BottomWarning from '../components/bottomWarning.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React from 'react'

const Signup = React.memo(function () {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")
    const navigate = useNavigate();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    return (
        <>
            <div className='bg-slate-300 w-full h-screen flex justify-center'>

                <div className='flex flex-col justify-center'>

                    <div className='bg-slate-100 rounded-lg w-80 text-center h-max p-4 '>

                        <Heading label={"Signup"} />
                        <SubHeading label={"Enter your infromation to create an account"} />
                        <InputBox label={"First Name"} placeholder={"john"} onChange={(e) => {
                            setFirstName(e.target.value)
                        }} />
                        <InputBox placeholder="Doe" label={"Last Name"} onChange={(e) => {
                            setLastName(e.target.value)
                        }} />
                        <InputBox placeholder="johndoe@gmail.com" label={"Email"} onChange={(e) => {
                            setUserName(e.target.value)
                        }} />
                        <InputBox placeholder="qwerty123" type={"password"} label={"Password"} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                        <Button label={"Signup"} onClick={async () => {
                            try {
                                await axios.post(`${API_BASE_URL}/v1/user/signup`, {
                                    username,
                                    firstName,
                                    lastName,
                                    password
                                }, {
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    withCredentials: true,

                                });

                                if (status >= 400) {
                                    navigate('/failed')
                                }
                                else {
                                    navigate('/dashboard/?fName=' + firstName)
                                }
                            }
                            catch (e) {
                                alert(e);
                                navigate('/failed')

                            }
                        }} />

                        <BottomWarning label={"Already have an account?"} buttonText={"Signin"} to={'/signin'} />

                    </div>
                </div>
            </div>
        </>
    )
})

Signup.displayName = "Signup"
export default Signup
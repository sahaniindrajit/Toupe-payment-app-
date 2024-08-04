import Heading from '../components/heading.jsx'
import InputBox from '../components/inputBox.jsx'
import SubHeading from '../components/subHeading.jsx'
import Button from '../components/button.jsx'
import BottomWarning from '../components/bottomWarning.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")
    const navigate = useNavigate();
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
                        <InputBox placeholder="qwerty123" label={"Password"} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                        <Button label={"Signup"} onClick={async () => {
                            await axios.post("http://localhost:3500/api/v1/user/signup", {
                                username,
                                firstName,
                                lastName,
                                password
                            }, {
                                withCredentials: true,
                            });
                            navigate('/dashboard')
                        }} />

                        <BottomWarning label={"Already have an account?"} buttonText={"Signin"} to={'/signin'} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
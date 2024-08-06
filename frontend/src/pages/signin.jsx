import Heading from '../components/heading.jsx'
import InputBox from '../components/inputBox.jsx'
import SubHeading from '../components/subHeading.jsx'
import Button from '../components/button.jsx'
import BottomWarning from '../components/bottomWarning.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <>
            <div className='bg-slate-300 w-full h-screen flex justify-center'>

                <div className='flex flex-col justify-center'>

                    <div className='bg-slate-100 rounded-lg w-80 text-center h-max p-4 '>

                        <Heading label={"Signin"} />
                        <SubHeading label={"Enter your credentials to access an account"} />
                        <InputBox placeholder="johndoe@gmail.com" label={"Email"} onChange={(e) => setUsername(e.target.value)} />
                        <InputBox placeholder="qwerty123" type={"password"} label={"Password"} onChange={(e) => setPassword(e.target.value)} />
                        <Button label={"Signin"} onClick={async () => {
                            try {
                                await axios.post("http://localhost:3500/api/v1/user/signin", {
                                    username,
                                    password
                                }, {
                                    withCredentials: true
                                })


                                if (status >= 400) {
                                    navigate('/failed')
                                }
                                else {
                                    navigate('/dashboard')
                                }
                            }
                            catch (e) {
                                alert(e);
                                navigate('/failed')

                            }
                        }} />
                        <BottomWarning label={"Don't have an account?"} buttonText={"Signup"} to={'/signup'} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin
import Heading from '../components/heading.jsx'
import InputBox from '../components/inputBox.jsx'
import SubHeading from '../components/subHeading.jsx'
import Button from '../components/button.jsx'
import BottomWarning from '../components/bottomWarning.jsx'

function Signup() {
    return (
        <>
            <div className='bg-slate-300 w-full h-screen flex justify-center'>

                <div className='flex flex-col justify-center'>

                    <div className='bg-slate-100 rounded-lg w-80 text-center h-max p-4 '>

                        <Heading label={"Signup"} />
                        <SubHeading label={"Enter your infromation to create an account"} />
                        <InputBox label={"First Name"} placeholder={"john"} />
                        <InputBox placeholder="Doe" label={"Last Name"} />
                        <InputBox placeholder="johndoe@gmail.com" label={"Email"} />
                        <InputBox placeholder="qwerty123" label={"Password"} />
                        <Button label={"Signup"} />
                        <BottomWarning label={"Already have an account?"} buttonText={"Signin"} to={'/signin'} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
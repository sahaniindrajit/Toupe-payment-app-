import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Heading from "./heading";
import InputBox from "./inputBox";
import { useState } from "react";
import axios, { HttpStatusCode } from "axios";

export default function SendBox() {
    const [SearchParams] = useSearchParams()
    const id = SearchParams.get("id");
    const fName = SearchParams.get("fName")
    const lName = SearchParams.get("lName")
    const [amount, SetAmount] = useState(0)
    const navigate = useNavigate()
    return (
        <>
            <Heading label={"Send Money"} />

            <div className="flex justify-start mt-8 mb-5">

                <div className="rounded-full h-12 w-12 bg-green-400 text-white font-bold text-xl flex justify-center items-center mt-1 mr-4">
                    {fName[0].toUpperCase()}
                </div>

                <div className="flex justify-center items-center font-semibold text-xl">

                    {fName} {lName}

                </div>
            </div>

            <InputBox label={"Amount (in Rs)"} placeholder={"Enter Amount"} onChange={(e) => {
                SetAmount(parseInt(e.target.value));
            }} />

            <button type="button" onClick={async () => {
                try {

                    const response = await axios.post("http://localhost:3500/api/v1/account/transfer", {
                        to: id,
                        amount

                    }, {
                        withCredentials: true
                    })
                    if (response.status >= 400) {
                        navigate('/failed')
                    }
                    else {
                        navigate('/success')
                    }
                }
                catch (e) {
                    alert(e);
                    navigate('/failed')

                }



            }} className="flex justify-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-400  w-full rounded-lg hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-400 my-5 ">
                Initiate Transfer
            </button>
        </>
    )
}
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Heading from "./heading";
import InputBox from "./inputBox";
import { useState } from "react";
import TransferButton from "./transferButton";

export default function SendBox() {
    const [SearchParams] = useSearchParams()
    const id = SearchParams.get("id");
    const fName = SearchParams.get("fName")
    const lName = SearchParams.get("lName")
    const [amount, SetAmount] = useState(0)
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

            <InputBox label={"Amount (in Rs)"} type={"Number"} placeholder={"Enter Amount"} onChange={(e) => {
                SetAmount(parseInt(e.target.value));
            }} />

            <TransferButton id={id} amount={amount} />
        </>
    )
}


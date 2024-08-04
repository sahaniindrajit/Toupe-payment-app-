import SendMoney from "../pages/sendMoney";
import Heading from "./heading";
import InputBox from "./inputBox";

export default function SendBox() {
    return (
        <>
            <Heading label={"Send Money"} />

            <div className="flex justify-start mt-8 mb-5">

                <div className="rounded-full h-12 w-12 bg-green-400 text-white font-bold text-xl flex justify-center items-center mt-1 mr-4">
                    A
                </div>

                <div className="flex justify-center items-center font-semibold text-xl">

                    Friend ABC

                </div>
            </div>

            <InputBox label={"Amount (in Rs)"} placeholder={"Enter Amount"} />

            <button type="button" className="flex justify-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-400  w-full rounded-lg hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-400 my-5 ">
                Initiate Transfer
            </button>
        </>
    )
}
import { useState } from "react";
import axios from "axios";
import Success from "./success";
import Failed from "./failed";


export default function TransferButton({ id, amount }) {
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(null);

    async function handleClick() {

        try {
            const response = await axios.post("/v1/account/transfer", {
                to: id,
                amount
            }, {
                withCredentials: true
            });

            if (response.status >= 400) {
                setIsSuccess(false);
                setMessage(response.data.detail);
            }
            else {
                setIsSuccess(true);
                setMessage(response.data.msg);
            }
        }
        catch (error) {
            setIsSuccess(false);
            setMessage(error.response.data.msg);


        }

    }

    return (
        <div>
            <button
                type="button"
                onClick={handleClick}
                className="flex justify-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-400  w-full rounded-lg hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-400 my-5"
            >
                Initiate Transfer
            </button>
            {isSuccess === true && <Success data={message} />}
            {isSuccess === false && <Failed data={message} />}
        </div>
    );
};

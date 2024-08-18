import axios from "axios"
import { useEffect, useState } from "react"

export default function Balance() {
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        try {
            const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
            axios.get(`${API_BASE_URL}/v1/account/balance`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            })
                .then((response) => {
                    setBalance(response.data.Balance)
                })
        }
        catch (e) {
            console.log(e);
        }
    }, [balance]);
    return (
        <div className="flex justify-between">
            <div className="text-md font-semibold ml-4">
                Your balance
            </div>
            <div className="text-md font-semibold mr-4">
                ₹ {balance}
            </div>
        </div>
    )
}


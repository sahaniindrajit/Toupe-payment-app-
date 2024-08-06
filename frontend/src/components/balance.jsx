import axios from "axios"
import { useEffect, useState } from "react"

export default function Balance() {
    const [balance, setBalance] = useState(0)
    useEffect(() => {
        try {
            axios.get('http://localhost:3500/api/v1/account/balance', {
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


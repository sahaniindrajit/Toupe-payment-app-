export default function Balance({ balance }) {

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
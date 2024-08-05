import { useEffect, useState } from "react";
import axios from 'axios'
import Button from "./button";
import { useNavigate } from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3500/api/v1/user/bulk?filter=" + filter, {
            withCredentials: true,
        })
            .then((response) => {
                setUsers(response.data.user)
            })

    }, [filter])
    return (
        <>

            <div className="font-bold mt-6 text-lg mx-4">
                Users
            </div>
            <div className="my-2 mx-4">
                <input onChange={(e) => {
                    setFilter(e.target.value)
                }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>

            </div>

            <div>
                {users ? users.map(user =>
                    <User user={user} />
                ) : <div className="font-semibold text-center text-xl mx-4">No user Found</div>}
            </div>

        </>
    )
}

function User({ user }) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between mx-4">

            <div className="flex justify-center items-center">

                <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center items-center mt-1 mr-2">
                    {user.firstName[0]}
                </div>

                <div className="flex justify-center items-center">

                    {user.firstName} {user.lastName}

                </div>
            </div>

            <div>
                <Button label={"Send Money"} onClick={(e) => {
                    navigate("/send?id=" + user._id + "&fName=" + user.firstName + "&lName=" + user.lastName);

                }} />
            </div>

        </div>
    )

}


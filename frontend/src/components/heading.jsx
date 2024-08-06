import React from "react"
const Heading = React.memo(function ({ label }) {
    return (
        <div className="font-bold pt-3 text-4xl">
            {label}
            {console.log("555")}
        </div>
    )
})
export default Heading

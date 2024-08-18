import React from "react"
import PropTypes from 'prop-types';
const Heading = React.memo(function ({ label }) {
    return (
        <div className="font-bold pt-3 text-4xl">
            {label}
        </div>
    )
})

Heading.displayName = "Heading"

Heading.propTypes = {
    label: PropTypes.string.isRequired,

};
export default Heading

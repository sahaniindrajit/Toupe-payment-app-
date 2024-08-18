import React from "react"
import PropTypes from 'prop-types';

const SubHeading = React.memo(function ({ label }) {
    return (
        <div className="text-slate-600 text-md pb-4 pt-0.5 px-4">
            {label}
        </div>
    )
})

SubHeading.displayName = "SubHeading"
SubHeading.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SubHeading
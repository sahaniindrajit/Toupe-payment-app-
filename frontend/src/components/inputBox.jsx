import React from "react"
import PropTypes from 'prop-types';

const InputBox = React.memo(function ({ label, placeholder, type, onChange }) {
    return (
        <div>
            <div className="text-left text-sm font-medium py-2">{label}</div>

            <input placeholder={placeholder} type={type} onChange={onChange} className="w-full px-2 py-2 border rounded border-slate-200" />

        </div>
    )
})

InputBox.displayName = "InputBox"

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default InputBox
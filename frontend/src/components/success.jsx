import { data } from "autoprefixer";
import PropTypes from 'prop-types';

export default function Success({ data }) {
    return (
        <div className="flex items-center justify-center w-full h-32 bg-green-500">
            <div className="text-white text-2xl flex items-center">
                <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {data}
            </div>
        </div>
    );
}
Success.propTypes = {
    data: PropTypes.string.isRequired,

};


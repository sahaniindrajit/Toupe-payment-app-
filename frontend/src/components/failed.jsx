import PropTypes from 'prop-types';
export default function Failed({ data }) {
    return (
        <div className="flex items-center justify-center w-full h-32 bg-red-500">
            <div className="text-white text-2xl flex items-center">
                <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {data}
            </div>
        </div>
    );
}

Failed.propTypes = {
    data: PropTypes.string.isRequired,

};



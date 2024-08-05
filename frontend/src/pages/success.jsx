export default function Success() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-500">
            <div className="text-white text-2xl flex items-center">
                <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Transfer is complete
            </div>
        </div>
    );
}


import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

const HomePage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-8">Welcome to Toupe Payment app</h1>
                <div className="space-x-4">
                    <Link to="/signup">
                        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Sign Up
                        </button>
                    </Link>
                    <Link to="/signin">
                        <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

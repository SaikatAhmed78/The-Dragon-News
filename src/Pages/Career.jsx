import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const Career = () => {
    return (
       <>
       <Header></Header>

       <div className="max-w-6xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-indigo-600 mb-8 text-center border-b-4 border-indigo-500 pb-4">Career Opportunities</h1>
            <p className="text-gray-600 text-lg mb-8 text-center leading-relaxed">
                At Dragon News, we’re always on the lookout for talented and passionate individuals to join our team. Whether you’re a seasoned journalist, an innovative developer, or a creative marketer, we have a place for you.
            </p>
            <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Current Openings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-indigo-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-indigo-800 mb-2">Senior Journalist</h3>
                    <p className="text-gray-700">We are looking for an experienced journalist with a knack for investigative reporting. If you have a passion for uncovering the truth and a commitment to ethical journalism, apply now!</p>
                </div>
                <div className="p-6 bg-indigo-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-indigo-800 mb-2">Frontend Developer</h3>
                    <p className="text-gray-700">Join our tech team to build and maintain user-friendly interfaces. Experience with React and TailwindCSS is a plus.</p>
                </div>
                <div className="p-6 bg-indigo-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-indigo-800 mb-2">Content Marketer</h3>
                    <p className="text-gray-700">Help us reach a wider audience by creating and executing effective marketing strategies. A background in digital marketing is preferred.</p>
                </div>
            </div>
            <div className="mt-10 text-center">
                <Link to="/" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300">Back to Home</Link>
            </div>
        </div>
       </>
    );
};

export default Career;

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const About = () => {
    return (
        <>
         <header>
            <Header></Header>
        </header>

        <div className="max-w-6xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-yellow-600 mb-8 text-center border-b-4 border-yellow-500 pb-4">About Us</h1>
            <p className="text-gray-600 text-lg mb-8 text-center leading-relaxed">
                Welcome to Dragon News! We are committed to bringing you the latest and most accurate news from around the world. Our dedicated team of journalists, editors, and developers work tirelessly to ensure you stay informed.
            </p>
            <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
                Our mission is to provide unbiased news and insightful analysis, helping our readers make informed decisions. We believe in the power of journalism to create a better, more informed society.
            </p>
            <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Our Team</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
                Our team comprises seasoned journalists, tech-savvy developers, and creative marketers, all working together to deliver the best news experience. We value integrity, innovation, and dedication.
            </p>
            <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
                Got questions or feedback? Feel free to reach out to us at <a href="mailto:contact@dragonnews.com" className="text-yellow-600 hover:text-yellow-800">contact@dragonnews.com</a>. We’d love to hear from you!
            </p>
            <div className="mt-10 text-center">
                <Link to="/" className="inline-block px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow hover:bg-yellow-700 transition-colors duration-300">Back to Home</Link>
            </div>
        </div>
        </>

        
    );
};

export default About;

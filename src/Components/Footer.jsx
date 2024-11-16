import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* About Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">About Dragon News</h2>
                    <p className="text-gray-400 mb-4">
                        Dragon News is committed to bringing you the latest and most accurate news from around the world. Stay informed with our dedicated team of journalists and editors.
                    </p>
                    <a href="#" className="text-blue-500 hover:underline">Learn more about us</a>
                </div>


                <div>
                    <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                    <ul className="text-gray-400">
                        <li className="mb-2"><a href="/" className="hover:underline">Home</a></li>
                        <li className="mb-2"><a href="/career" className="hover:underline">Career</a></li>
                        <li className="mb-2"><a href="/about" className="hover:underline">About</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaYoutube size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center text-gray-500 text-sm">
                &copy; 2024 Dragon News. All rights reserved.
            </div>
            <div className="text-center text-gray-500 text-sm mt-2"> Designed by <span className="text-white font-semibold">Saikat Ahmed</span> </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { FaBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ singleNews }) => {
    const { title, details, author, image_url, rating, total_view } = singleNews;

    return (
        <div className="rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full inline-block mr-2" src={author.img} alt={author.name} />
                    <div className="inline-block align-middle">
                        <p className="text-gray-900 leading-none">{author.name}</p>
                        <p className="text-gray-600 text-sm">{author.published_date}</p>
                    </div>
                </div>

                <div className="flex space-x-3 text-gray-500">
                    <button className="hover:text-gray-700">
                        <FaBookmark size={20} />
                    </button>
                    <button className="hover:text-gray-700">
                        <FaShareAlt size={20} />
                    </button>
                </div>
            </div>

            <img className="w-full mt-4" src={image_url} alt="News" />

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {details.slice(0, 100)}...
                </p>
                <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 text-sm font-semibold mt-2 inline-block"
                >
                    Read More
                </a>
            </div>

            <div className="flex items-center justify-between mt-4 px-6">
                <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">
                        {'⭐'.repeat(Math.round(rating.number))}
                    </span>
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        {rating.number}
                    </span>
                </div>
                <span className="text-gray-500 text-sm">{total_view} views</span>
            </div>
        </div>
    );
};

export default NewsCard;

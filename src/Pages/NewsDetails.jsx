import React from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/layout Components/RightAside';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];
    // console.log(news)

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>

                <section className='col-span-9'>
                    <h2 className='font-bold mb-4 text-2xl text-gray-800'>Dragon News</h2>

                    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                className="rounded-xl"
                                alt="News"
                            />
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-2xl font-semibold text-gray-900 mb-4">{news?.title}</h2>
                            <p className="text-gray-700 text-base mb-6">
                                {news?.details}
                            </p>

                            <div className="card-actions flex">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 transition-colors duration-300">Back To Category</Link>
                            </div>
                        </div>
                    </div>
                </section>


                <aside className='col-span-3'><RightAside></RightAside></aside>
            </main>
        </div>
    );
};

export default NewsDetails;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {

    const {data : news} = useLoaderData();


    return (
        <div>
         <h2 className='font-semibold text-xl mb-2 text-center'>Daily News</h2>

         <div>
            {
                news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
            }
         </div>
        </div>
    );
};

export default CategoryNews;
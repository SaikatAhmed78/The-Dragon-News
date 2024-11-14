import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-200 px-3 py-1 rounded">Latest</p>
            
            <Marquee pauseOnHover={true} speed={100}>
                <Link to="/news">
                The government has announced new economic policies aimed at boosting foreign investment and improving infrastructure
                </Link>
                <Link to="/news">
                The government has announced new economic policies aimed at boosting foreign investment and improving infrastructure
                </Link>
                <Link to="/news">
                The government has announced new economic policies aimed at boosting foreign investment and improving infrastructure
                </Link>
                <Link to="/news">
                The government has announced new economic policies aimed at boosting foreign investment and improving infrastructure
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;
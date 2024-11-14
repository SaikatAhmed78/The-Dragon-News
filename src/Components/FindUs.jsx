import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div className="mt-16">
            <h2 className="font-semibold mb-3">Find Us On</h2>

            <div className="join join-vertical flex *:bg-base-200 space-y-3">
                <button className="btn join-item justify-start">
                <FaFacebookF />
                    FaceBook
                    </button>

                <button className="btn join-item justify-start">
                <FaTwitter />
                    Twitter
                    </button>

                <button className="btn join-item justify-start">
                <FaInstagram />
                    Instagram
                    </button>
            </div>
        </div>
    );
};

export default FindUs;
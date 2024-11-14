import { NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const {user, setUser} = useContext(AuthContext)

    return (

        <div className="flex justify-between items-center">

            <div className=""></div>

            <div className="nav space-x-5">
    <NavLink
        to="/"
        className={({ isActive }) => 
            isActive ? "text-white bg-blue-500 font-semibold px-3 py-2 rounded" : "text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
        }
    >
        Home
    </NavLink>
    <NavLink
        to="/career"
        className={({ isActive }) => 
            isActive ? "text-white bg-blue-500 font-semibold px-3 py-2 rounded" : "text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
        }
    >
        Career
    </NavLink>
    <NavLink
        to="/about"
        className={({ isActive }) => 
            isActive ? "text-white bg-blue-500 font-semibold px-3 py-2 rounded" : "text-gray-700 hover:text-blue-500 px-3 py-2 rounded"
        }
    >
        About
    </NavLink>

</div>

            <div className="login flex gap-2 items-center">
                <div className="">
                    <img src={userIcon} />
                </div>
                <NavLink to="/auth/login" className="btn btn-neutral px-4 py-1 rounded-lg">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
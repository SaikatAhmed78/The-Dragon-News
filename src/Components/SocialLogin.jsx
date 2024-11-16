import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";


const SocialLogin = () => {

  const { googleLogin , githubLogin} = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin().catch(error => {
      // console.log(error);
    })
  };
  const handleGithubLogin = () => {
    githubLogin().catch(error => {
      // console.log(error);
    })
  };

    return (
        <div>
          <h2 className="font-semibold mb-3">Login With</h2>  

          <div className="*:w-full space-y-2 ">

            <button onClick={handleGoogleLogin} className="btn">
                <FaGoogle /> Login With Google
            </button>

            <button onClick={handleGithubLogin} className="btn">
                <FaGithub /> Login With Github
            </button>
          </div>
        </div>
    );
};

export default SocialLogin;
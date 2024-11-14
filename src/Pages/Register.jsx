import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h1 className="text-2xl font-bold text-center">Register Your Account</h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photoUrl' placeholder="Enter your URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Enter your email adress" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Register</button>
        </div>
      </form>
      <p className='text-center font-semibold'>
      Already Have An Account ? Please <NavLink className="text-blue-600" to="/auth/login">Login</NavLink>
      </p>
    </div>

    </div>
    );
};

export default Register;
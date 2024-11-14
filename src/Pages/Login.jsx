import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
      <div className='min-h-screen flex justify-center items-center'>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h1 className="text-2xl font-bold text-center">Login Your Account</h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className='text-center font-semibold'>
        Dont’t Have An Account ? Please <NavLink className="text-blue-600" to="/auth/register">Register</NavLink>
        </p>
      </div>

      </div>
    );
};

export default Login;
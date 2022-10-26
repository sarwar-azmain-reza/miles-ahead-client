import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import google from '../../Assets/google.png';
import github from '../../Assets/github.png';
import loginpng from '../../Assets/loginpng.png'

const Login = () => {
    const { userSignIn,googleSignIn,gitSignIn } = useContext(AuthContext);
    const [error,setError] = useState('');
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        userSignIn(email,password)
        .then(result =>{
            const user = result.user;
            setError('');
            console.log(user);
        })
        .catch(error =>{
            setError(error.message);
            console.log(error);
        })

    }

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            setError('');
            console.log(user);
        })
        .catch(error =>{
            setError(error.message);
            console.log(error);
        })
    }
    const handleGitSignIn = ()=>{
        gitSignIn()
        .then(result =>{
            const user = result.user;
            setError('');
            console.log(user);
        })
        .catch(error =>{
            setError(error.message);
            console.log(error);
        })
    }

    return (
        <>
            <h1 className='text-center text-4xl font-bold mt-10'>Login And Dive Into The Courses</h1>

            <div className='mb-10 flex lg:flex-row flex-col items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <img src={loginpng} alt="pngwing-com" border="0" className='h-72 mr-5' />

                </div>
                <div className="card md:w-1/2 lg:w-2/6 shadow-2xl mt-10 bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
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
                                <Link to='/register' className="label-text-alt link link-hover">Don't have an account?</Link>
                            </label>
                        </div>
                        {error && <p className='text-red-600'>Error: {error}</p>}
                        <div className="form-control">
                            <button className="btn bg-sky-600 border-none">Login</button>
                        </div>
                        <div className='mt-0'>
                            <p className='text-center font-semibold text-xl'>Continue With</p>
                            <div className='flex justify-center mt-2'>
                                <button className='mr-5 bg-gray-300 hover:bg-sky-600 rounded-lg p-1 shadow-lg' onClick={handleGoogleSignIn}>
                                    <img src={google} alt="goggle" border="0" className='h-10' />
                                </button>
                                <button className='bg-gray-300 hover:bg-sky-600 rounded-lg p-1 shadow-lg' onClick={handleGitSignIn}>
                                    <img src={github} alt="git" border="0" className='h-10' />
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Login;
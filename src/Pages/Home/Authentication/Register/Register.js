import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { user, setUser, googleSignIn, emailPassRegister } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        // console.log(form)
        const email = form.email.value;
        const password = form.password.value;
        emailPassRegister(email, password)
            .then(result => {
                setUser(result.user)
                const user = result.user;


                const currentUser = {
                    email: user.email
                }

                // console.log(currentUser);

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('book-store-token', data.token);

                        navigate(from, { replace: true });
                    });
                form.reset();
            })
            .catch(error => console.error("Error:", error));
        // console.log(email, password)
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        googleSignIn(googleProvider)
            .then(result => {
                setUser(result.user)
                const user = result.user;


                const currentUser = {
                    email: user.email
                }

                // console.log(currentUser);

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('book-store-token', data.token);

                        navigate(from, { replace: true });
                    });
            })
            .catch(error => console.error(error))
    }
    // console.log(user)

    return (
        <div>
            <Helmet>
                <title>Register | Book Store</title>
            </Helmet>
            <form onSubmit={ handleRegister } className='w-2/3 md:w-1/4  mx-auto my-28'>
                <div className="shadow-red-600 shadow-xl rounded-xl px-6 pt-10 pb-8">
                    <h4 className=' text-center mb-6  my-2 text-xl font-bold text-red-700'>Register</h4>
                    <div className="relative my-2">
                        <input type="email" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                    </div>
                    <div className="relative my-2">
                        <input type="password" id="password" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                    </div>
                    <button type="submit" className="mt-3 text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Register</button>

                    <div className='mb-2 text-center flex flex-row items-center justify-evenly mt-2 '>
                        <hr className=' border-gray-500 w-1/4' />
                        or
                        <hr className='border-gray-500 w-1/4' />
                    </div>
                    <Link >
                        <button onClick={ handleGoogleSignIn } type="button" className="text-white w-full bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Register With Google</button>
                    </Link>
                    <p className='mt-3 text-center'>Already have an Account? <span className='text-base font-semibold text-red-700'><Link to='/login'>Login</Link></span></p>
                </div>

            </form>
        </div>
    );
};

export default Register;
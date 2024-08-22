import React from 'react';

const Signup = () => {
    return (
        <div className="relative w-full h-screen bg-gray-900">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Signup Component */}
            <section className="relative flex items-center justify-center w-full h-full">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4 md:space-y-6">
                    <h1 className="text-xl font-bold leading-tight text-gray-900 md:text-2xl">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                placeholder="name@company.com" 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="••••••••" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                            <input 
                                type="password" 
                                name="confirm-password" 
                                id="confirm-password" 
                                placeholder="••••••••" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                required 
                            />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input 
                                    id="terms" 
                                    aria-describedby="terms" 
                                    type="checkbox" 
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-blue-300" 
                                    required 
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500">
                                    I accept the <a className="font-medium text-blue-600 hover:underline" href="#">Terms and Conditions</a>
                                </label>
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Create an account
                        </button>
                        <p className="text-sm font-light text-gray-500">
                            Already have an account? <a href="#" className="font-medium text-blue-600 hover:underline">Login here</a>
                        </p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Signup;

import React from 'react';

const Homebody = () => {
    return (
        <div>
            <section className="px-2 py-32 bg-white md:px-0">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    <span className="block xl:inline">Useful Tools to</span>
                                    <span className="block text-blue-600 xl:inline">Help You Build Faster.</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                                    It's never been easier to build beautiful websites that convey your message and tell your story.
                                </p>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-600 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto">
                                        Try It Free
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                    <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Feature" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
                    <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20" alt="Productivity" />
                    </div>
                    <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Boost Productivity
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                            Build an atmosphere that creates productivity in your organization and your company culture.
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                    <span className="text-sm font-bold">✓</span>
                                </span> Maximize productivity and growth
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                    <span className="text-sm font-bold">✓</span>
                                </span> Speed past your competition
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                    <span className="text-sm font-bold">✓</span>
                                </span> Learn the top techniques
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
                    <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Automated Tasks
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                            Save time and money with our revolutionary services. We are the leaders in the industry.
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                    <span className="text-sm font-bold">✓</span>
                                </span> Automated task management workflow
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                    <span className="text-sm font-bold">✓</span>
                                </span> Detailed analytics for your data
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                    <span className="text-sm font-bold">✓</span>
                                </span> Some awesome integrations
                            </li>
                        </ul>
                    </div>
                    <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                        <img src="https://cdn.devdojo.com/images/december2020/settings.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" alt="Automated Tasks" />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div className="w-full lg:max-w-lg lg:ml-auto lg:pl-8">
                                <h2 className="mb-6 text-3xl font-extrabold leading-snug text-gray-800 lg:text-4xl lg:leading-snug">
                                    Have Questions?
                                    <br className="hidden md:block" />
                                    Let Us Help You Out.
                                </h2>
                                <p className="text-base text-gray-600 md:text-lg">
                                    Drop us a message and we’ll get back to you as soon as possible.
                                </p>
                                <a href="#_" className="inline-flex items-center mt-8 text-lg text-blue-600 hover:text-blue-700">
                                    Contact Us
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="order-0 w-full px-3 lg:w-1/2 lg:pl-8">
                            <div className="w-full px-8 py-6 mx-auto text-center bg-white border border-gray-300 rounded-lg shadow-md lg:px-12 lg:py-12">
                                <h3 className="mb-4 text-xl font-semibold text-gray-800">Get In Touch</h3>
                                <form>
                                    <div className="mb-4">
                                        <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="mb-4">
                                        <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="mb-4">
                                        <textarea name="message" placeholder="Your Message" rows="4" className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                    </div>
                                    <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 sm:py-12 md:py-16 lg:py-24">
                <div className="max-w-6xl px-4 pb-12 mx-auto sm:px-6 md:px-6 lg:px-4">
                    <div className="flex flex-col items-center text-center text-gray-900">
                        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                            Pricing Options
                        </h2>
                        <p className="mt-4 text-2xl leading-normal text-gray-600">
                            We've got a plan for companies of any size
                        </p>
                    </div>
                    <div className="grid max-w-md mx-auto mt-6 overflow-hidden text-gray-900 border border-gray-300 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
                        <div className="px-4 py-8 mb-6 text-center bg-white sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                                Basic
                            </h3>
                            <p className="mt-3 leading-7 text-gray-600">
                                The basic plan is a good fit for smaller teams and startups
                            </p>
                            <div className="flex items-center justify-center mt-6 text-gray-900 sm:mt-8">
                                <p className="text-6xl font-semibold leading-tight text-blue-600 sm:text-6xl md:text-7xl">
                                    $29
                                </p>
                                <p className="ml-2 text-xl leading-tight text-gray-600 sm:text-xl md:text-2xl">
                                    /month
                                </p>
                            </div>
                            <a className="mt-8 inline-block px-6 py-3 text-lg font-medium leading-tight text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" href="#">
                                Get Started
                            </a>
                        </div>
                        <div className="px-4 py-8 mb-6 text-center bg-white sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                                Standard
                            </h3>
                            <p className="mt-3 leading-7 text-gray-600">
                                Our standard plan is perfect for growing teams and businesses
                            </p>
                            <div className="flex items-center justify-center mt-6 text-gray-900 sm:mt-8">
                                <p className="text-6xl font-semibold leading-tight text-blue-600 sm:text-6xl md:text-7xl">
                                    $59
                                </p>
                                <p className="ml-2 text-xl leading-tight text-gray-600 sm:text-xl md:text-2xl">
                                    /month
                                </p>
                            </div>
                            <a className="mt-8 inline-block px-6 py-3 text-lg font-medium leading-tight text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" href="#">
                                Get Started
                            </a>
                        </div>
                        <div className="px-4 py-8 mb-6 text-center bg-white sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                                Premium
                            </h3>
                            <p className="mt-3 leading-7 text-gray-600">
                                The premium plan offers advanced features for larger enterprises
                            </p>
                            <div className="flex items-center justify-center mt-6 text-gray-900 sm:mt-8">
                                <p className="text-6xl font-semibold leading-tight text-blue-600 sm:text-6xl md:text-7xl">
                                    $99
                                </p>
                                <p className="ml-2 text-xl leading-tight text-gray-600 sm:text-xl md:text-2xl">
                                    /month
                                </p>
                            </div>
                            <a className="mt-8 inline-block px-6 py-3 text-lg font-medium leading-tight text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" href="#">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                About
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Blog
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Team
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Pricing
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Contact
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Terms
                            </a>
                        </div>
                    </nav>
                    <div className="flex justify-center mt-8 space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.043.06-.308 0-.615-.001-.923-.007-.932-.02-1.818-.145-2.69-.345-1.03-.242-2.036-.685-2.91-1.272a4.902 4.902 0 01-1.772-1.772c-.587-.874-1.03-1.88-1.272-2.91-.2-.872-.325-1.758-.345-2.69-.006-.308-.007-.616-.007-.923v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 4.043-.06zm0-2c-2.484 0-2.797.01-3.779.056-1.004.046-1.76.208-2.406.453a7.902 7.902 0 00-2.899 1.872 7.902 7.902 0 00-1.872 2.899c-.245.646-.407 1.402-.453 2.406-.046.982-.056 1.295-.056 3.779 0 2.484.01 2.797.056 3.779.046 1.004.208 1.76.453 2.406a7.902 7.902 0 001.872 2.899 7.902 7.902 0 002.899 1.872c.646.245 1.402.407 2.406.453.982.046 1.295.056 3.779.056 2.484 0 2.797-.01 3.779-.056 1.004-.046 1.76-.208 2.406-.453a7.902 7.902 0 002.899-1.872 7.902 7.902 0 001.872-2.899c.245-.646.407-1.402.453-2.406.046-.982.056-1.295.056-3.779 0-2.484-.01-2.797-.056-3.779-.046-1.004-.208-1.76-.453-2.406a7.902 7.902 0 00-1.872-2.899 7.902 7.902 0 00-2.899-1.872c-.646-.245-1.402-.407-2.406-.453-1.028-.047-1.294-.056-3.779-.056zm-3.479 7.474a3.815 3.815 0 100-7.63 3.815 3.815 0 000 7.63zm0-6.665a2.85 2.85 0 110 5.699 2.85 2.85 0 010-5.699zm6.629 1.349a1.019 1.019 0 110-2.038 1.019 1.019 0 010 2.038z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M23 3a10.972 10.972 0 01-3.07.84A4.934 4.934 0 0022.4 2a10.96 10.96 0 01-3.387 1.292A4.924 4.924 0 0016.84.986a4.934 4.934 0 00-4.59 6.106A13.986 13.986 0 013 4.278a4.92 4.92 0 001.528 6.566A4.904 4.904 0 01.96 9.9v.06a4.924 4.924 0 003.95 4.825 4.935 4.935 0 01-2.227.084 4.933 4.933 0 004.604 3.42A9.876 9.876 0 010 20.56a13.94 13.94 0 007.548 2.214c9.055 0 14.017-7.496 14.017-13.986 0-.213 0-.425-.014-.637A10.026 10.026 0 0023 3z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.162 6.84 9.486.5.092.684-.217.684-.482 0-.24-.009-.876-.013-1.721-2.788.606-3.378-1.344-3.378-1.344-.453-1.15-1.107-1.457-1.107-1.457-.906-.621.069-.608.069-.608 1 .069 1.706 1.037 1.706 1.037.891 1.553 2.337 1.103 2.91.846.091-.647.349-1.103.635-1.356-2.221-.253-4.556-1.113-4.556-4.946 0-1.093.39-1.989 1.032-2.69-.103-.253-.448-1.271.097-2.653 0 0 .846-.272 2.77 1.037a9.594 9.594 0 012.508-.337c.849.004 1.699.114 2.508.337 1.926-1.309 2.77-1.037 2.77-1.037.545 1.382.201 2.4.099 2.653.641.701 1.032 1.597 1.032 2.69 0 3.84-2.341 4.692-4.568 4.946.363.316.687.947.687 1.912 0 1.379-.012 2.49-.012 2.83 0 .265.179.579.692.481 1.129A10.012 10.012 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="flex justify-center mt-8 text-base leading-6 text-gray-500">
                        <p>&copy; 2024 Company, Inc. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homebody;



























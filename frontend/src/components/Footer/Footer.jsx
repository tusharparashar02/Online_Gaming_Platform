// import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div style={{ 
            backgroundImage: `url("https://media.istockphoto.com/id/1467661374/video/soft-white-background-the-concept-of-abstract-clean-beautiful-soft-shiny-simple-blurred.jpg?s=640x640&k=20&c=2YiaSio1Nh1Zhc1IU0liUUOV85SIFHfcrhYPsG0GEd8=")` 
          }}>
            <footer className="border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://img.pikbest.com/origin/10/50/46/10ppIkbEsTtgD.png!bw700"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-red-900 uppercase">Resources</h2>
                            <ul className="text-black-700 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Contacts" className="hover:underline">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                       
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-red-900 uppercase">Legal</h2>
                            <ul className="text-black-700 font-medium">
                                <li className="mb-4">
                                    <Link to="https://policies.google.com/privacy?hl=en-US" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://policies.google.com/privacy?hl=en-US" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-yellow-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-black-900 sm:text-center">
                        <a href="#" className="hover:underline">
                            Tushar
                        </a>
                        . All Rights Reserved 2024.
                    </span>
                </div>
            </div>
        </footer>
          </div>
       
    );
}


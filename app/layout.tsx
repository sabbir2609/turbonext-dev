import 'tailwindcss/tailwind.css'
import Link from 'next/link'

import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import React from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body tabIndex={-1}>
                <div className="bg-base-100 drawer drawer-mobile">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* <!-- Navbar --> */}
                        <Navbar />
                        {/* <!-- Page content here --> */}

                        {children}

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" className="drawer-overlay"></label>
                        <aside className='bg-base-200 w-80'>
                            <div className='z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex shadow-sm'>
                                <Link href="/" className='flex-0 btn btn-ghost px-2'>
                                    <div className='font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl'>
                                        <span className='text-base-content uppercase'>Sabbir.</span>
                                    </div>
                                </Link>
                            </div>
                            <div className='bg-base-200 sticky top-0 z-10 grid grid-row-2 gap-y-2 w-full bg-opacity-90 py-3 px-2 backdrop-blur shadow-sm lg:hidden'>
                                <div className="form-control">
                                    <div className="input-group">
                                        <input type="text" placeholder="Search…" className="input input-bordered" />
                                        <button className="btn btn-square">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ul className="menu p-4 w-80 bg-base-200">
                                {/* <!-- Sidebar content here --> */}
                                <Sidebar />

                            </ul>
                        </aside>
                    </div>
                </div>
            </body>
        </html>
    );
}

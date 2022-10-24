import React from "react";
import Link from 'next/link'
const NavBar = () => {
    return (<>
        <div className="sticky top-0 z-50">
            <div className="bg-base-100 text-center">
                CriSirona
            </div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <Link href="/">Projects</Link>
                            </li>
                            <li >
                            <Link href="blog/blog">Blog</Link>
                            </li>
                            <li>
                            <Link href="/about/about">About Me</Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/" ><a className="btn btn-ghost normal-case text-xl">BlogFolio</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                          <Link href="/">Projects</Link>
                        </li>
                        <li>
                          <Link href="blog/blog">Blog</Link>
                        </li>
                        <li>
                        <Link href="/about/about">About Me</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="https://github.com/csirona"><a className="btn">CsGitHub</a></Link>
                </div>
            </div>
        </div>


    </>)
}

export default NavBar

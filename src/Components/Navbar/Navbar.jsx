"use client";

import React from "react";
// import Styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import './navbar.css'

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className=" mx-auto">
      <div className=" ">

        <div className="mx-w-[500px]  mx-auto  flex gap-4 items-center justify-center text-center py-6">
          
          <div>

            <Image src = "https://i.ibb.co/SNJVbjj/logo-icon.png" alt ="logo image " width = {150} height = {100} ></Image>
          </div>

          <div>
          <h1 className=" text-3xl md:text-5xl font-medium">Department of Statistics</h1>
          <h3 className=" text-xl md:text-3xl my-2">Faculty of Science</h3>
          <h2 className="text-2xl md:text-4xl font-medium ">University of Dhaka</h2>
          </div>
         
        </div>


        <div className="bg-[#3472a8] ">
          <div className="navbar max-w-[1500px] mx-auto  w-full  px-5 font-semibold ">
            <div className="navbar-start">
              <div className="drawer ">
                <input
                  id="my-drawer-3"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                  <div className="w-full navbar">
                    <div className="flex-none lg:hidden">
                      <label
                        htmlFor="my-drawer-3"
                        aria-label="open sidebar"
                        className="btn btn-square btn-ghost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-6 h-6 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                        </svg>
                      </label>
                    </div>
              
                  </div>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu p-4 w-80 min-h-full bg-stone-100 text-white">
                    <li>
                      <Link href="/contactUs">Contact</Link>
                    </li>
                    <li>
                      <Link href="/contactUs">About </Link>
                    </li>
                    <li>
                      <Link href="/contactUs">Services </Link>
                    </li>
                    <li>
                      <Link href="/contactUs">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="navbar-center  hidden lg:flex">
              <div className= "container">

              <ul className={` menu gap-2 text-2xl font-bold text-white menu-horizontal relative z-20 px-1`}>
            
            <li  className={``}>
                  <Link href="/contactUs">Home </Link>
                </li>

                {/* dropdown  */}
                <li className={` `}>
                  <Link href="/contactUs">About </Link>


                  <ul className={`dropDown items-center z-10`}>  
              <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Number 
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>

                    <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Blog 
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>
            
                    <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Blog 
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>
                  </ul>

                </li>


                {/* Dropdown */}
                <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">People
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>


              <ul className={`dropDown items-center z-10`}>  
              <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Number 
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>

                    <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Blog 
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>

                    <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Blog 
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>
                  </ul>
            </li>
                  

                <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Blogs
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>
          

                <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Programs
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>

              <ul className={`dropDown items-center z-10`}>  
              <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Number 
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>

                    <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Blog 
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>
            
                    <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Blog 
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>
                  </ul>
            </li>

                <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Reserch
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>


                <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Co-Curriculum
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>

                <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Training
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>
          
                <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">News & Event
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>

              <ul className={`dropDown items-center z-10`}>  
              <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Number 
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>

                    <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Blog 
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>
            
                    <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Blog 
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>
                  </ul>
            </li>


                <li>
              <Link className={` ${pathname === '/services/softwareDevelopment' ? '"relative border-b-2 border-yellow-500 inline-block text-white hover:text-white group font-semibold pt-2 px-2 ': 'relative border-b-2 border-transparent inline-block text-white hover:text-yellow-200 hover:bg-[#3472a8] group font-semibold pt-2 px-2'}`} href="/services/softwareDevelopment">Alumni
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100 duration-200"></span>
              </Link>
            </li>
          </ul>

              </div>
          
            </div>
            <div className="navbar-end">
              <button className="text-xl"> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
 
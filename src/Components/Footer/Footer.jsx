import Image from "next/image";
import Link from "next/link";
import React from "react";
// import logo from "../../assets/ancova.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div 
    className="relative mx-auto bg-gray-800 w-full bg-no-repeat bg-cover"
    style={{
      backgroundImage: "url('https://i.ibb.co/P1HpWVk/Group-1321314097.png')",
    }}>


    <div className=" max-w-[1500px] pt-20 mx-auto px-5 ">
     <div  className="">
      <div className="text-white">
        <div className="md:flex gap-4 space-y-8 justify-between">

          <div>
            <h1 className="font-bold text-xl">QUICK LINKS</h1>
            <div className="flex flex-col space-y-5 mt-5 ">
              {/* <Link></Link> */}

              <Link href ="/privacy-policy">Privacy Policy</Link>
          
              <Link href ="/getSupport">SUPPORT</Link>
              <Link href ="/getSupport">SUPPORT</Link>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-xl">IMPORTANT LINKS</h1>
            <div className="flex flex-col space-y-5 mt-5">
              {/* <Link></Link> */}
              <Link href="/faq/generelfaq">FAQ</Link>
              <Link href={"/about"} className=" ">
                About
              </Link>
              <Link href={"/contact"} className=" ">
                Contact
              </Link>
              <Link href="/returnPolicy">Returns and Refunds</Link>
            </div>
          </div>

          {/* icon section  */}
          <div>
            <h1 className="font-bold text-xl">GET IN TOUCH</h1>
            <div className="flex gap-3 pb-7 mt-4">
              <div className="">
                <FaFacebook className="text-2xl text-white duration-200 cursor-pointer hover:text-gray-300 " />
              </div>
              <div className="">
                <FaLinkedin className="text-2xl text-white duration-200 cursor-pointer  hover:text-gray-300 " />
              </div>
              <div className="">
                <FaTwitter className="text-2xl text-white duration-200 cursor-pointer  hover:text-gray-300 " />
              </div>
             
            </div>

       
          </div>
        </div>
      </div>

  
    </div>
    </div>

    <div className="bg-gray-900 py-7  bottom-0 text-center mt-10">
        <div className="md:flex mb-5 max-w-[1500px] mx-auto justify-between items-center wrapper">
          <h1 className="text-gray-300 text-base">
            © Copyright 2024, All rights reserved
          </h1>

          <div className="flex items-center justify-center gap-4">
            <p className="text-white text-center">  Design by </p>
            <div className="text-2xl">
            {/* <Link href={"/"}>
              <Image src="https://i.ibb.co/smW1T1m/0578f53765.png" width={100} height={50} alt="logo"></Image>
            </Link> */}
          </div>
          </div>
        </div>
      </div>

 
    </div>


    


  );
};

export default Footer;

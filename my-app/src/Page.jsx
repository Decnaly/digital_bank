import React from 'react';
import logo_dark from "../images/logo-dark.svg";
import icon_hamburger from "../images/icon-hamburger.svg";

function Page() {
    return (
        <header className=' bg-white p-2 px-20 z-10 relative'>
            <div className='container mx-auto flex items-center justify-between'>
                <div><img src={logo_dark} alt="Logo" /></div>
                <div className='lg:hidden'>
                    <img src={icon_hamburger} alt="Hamburger" />
                </div>
                <div className=' gap-4 text-[14px] text-gray-500 hidden lg:flex'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Blog</a>
                    <a href="">Careers</a>
                </div>
                <div className='hidden lg:block'>
                    <button className='bg-gradient-to-t from-[#2CBBC2] to-[#31CF6D] text-white px-4 py-2 rounded-lg '>Request Invite</button></div>
            </div>

        </header>
    );
}

export default Page;
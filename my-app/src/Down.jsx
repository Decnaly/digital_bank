import React from "react";
import logo_light from "../images/logo-light.svg";
import icon_facebook from "../images/icon-facebook.svg";
import icon_youtube from "../images/icon-youtube.svg";
import icon_twitter from "../images/icon-twitter.svg";
import icon_pinterest from "../images/icon-pinterest.svg";
import icon_instagram from "../images/icon-instagram.svg";

function Down() {
  return (
    <div className="bg-slate-800">
      <div
        flex
        className="container mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-between p-6 lg:p-10"
      >
        <div className="flex items-center flex-col md:flex-row lg:flex-row justify-center px-20 gap-2 md:gap-20 lg:gap-20">
          <div className="flex flex-col items-center p-2 justify-center gap-10">
            <div>
              <img src={logo_light} alt="Logo" className="mx-auto py-0" />
            </div>
            <div className="flex items-center justify-center gap-4">
              <img src={icon_facebook} alt="Facebook" />
              <img src={icon_youtube} alt="YouTube" />
              <img src={icon_twitter} alt="Twitter" />
              <img src={icon_pinterest} alt="Pinterest" />
              <img src={icon_instagram} alt="Instagram" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 lg:gap-5 text-gray-500">
            <a href="">About Us</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 lg:gap-5 text-gray-500">
            <a href="">Careers</a>
            <a href="">Support</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-10">
          <button className="bg-gradient-to-t from-[#2CBBC2] to-[#31CF6D] text-white px-4 py-2 rounded-lg">
            Request Invite
          </button>
          <p className="text-gray-500 text-center">
            © Digitalbank. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Down;

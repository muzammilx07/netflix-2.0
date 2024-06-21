import React from "react";
import logoImage from "../assets/pngwing.com.png";

const Footer = () => {
  return (
    <div className="w-screen bg-black text-white relative">
      <div className="line w-full h-2 bg-gray-700"></div>
      <div className="px-20">
        <div className="absolute top-0 left-1/4 transform -translate-x-1/2 z-10">
          <img src={logoImage} alt="Logo" className="w-48" />
        </div>
        <div className="content flex justify-around px-64 pt-8 pb-20 mt-20">
          <div className="flex flex-col space-y-4">
            <div className="underline cursor-pointer">FAQ</div>
            <div className="underline cursor-pointer">Investor Relations</div>
            <div className="underline cursor-pointer">Privacy</div>
            <div className="underline cursor-pointer">
              <a
                href="https://www.speedtest.net/"
                className="text-white underline"
              >
                Speed Test
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="underline cursor-pointer">Help Centre</div>
            <div className="underline cursor-pointer">Jobs</div>
            <div className="underline cursor-pointer">Cookie Preferences</div>
            <div className="underline cursor-pointer">Legal Notices</div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="underline cursor-pointer">Account</div>
            <div className="underline cursor-pointer">Ways to Watch</div>
            <div className="underline cursor-pointer">
              Corporate Information
            </div>
            <div className="underline cursor-pointer">Only on Netflix</div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="underline cursor-pointer">Media Centre</div>
            <div className="underline cursor-pointer">Terms of Use</div>
            <div className="underline cursor-pointer">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

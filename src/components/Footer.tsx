import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 lg:px-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
          <FaGithub className="w-1/2 h-1/2" />
        </div>
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
          <FaLinkedin className="w-1/2 h-1/2" />
        </div>
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
          <FaInstagram className="w-1/2 h-1/2" />
        </div>
      </div>

      <p className="text-white-500">
        © 2024 Fauzan Ramadhan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

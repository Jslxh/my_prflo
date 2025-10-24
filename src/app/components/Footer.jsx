import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-12">
      <div className="text-center">
        <h1 className={`text-4xl md:text-5xl font-bold cursor-pointer`}>Jslxh'<span className="text-purple-600">s</span></h1>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          shreejayalakshmis@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-300 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Jslxh. All right reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/Jslxh">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jslxh/">LinkedIn</a>
          </li>
          {/* <li>
            <a href="">Twitter</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;

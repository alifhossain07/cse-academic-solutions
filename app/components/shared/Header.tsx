"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/public/images/csewebsolutions.png";
import { useLanguage } from "@/app/context/LanguageContext";


const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="bg-[#9EF01A]">
      <div className="flex mx-auto w-11/12 justify-between items-center p-5">
        <div className="flex items-center space-x-5">
          <Image src={Logo} alt="logo" width={100} height={100} />
          <h1 className="font-title font-bold text-3xl">CSE Academic Solutions</h1>
        </div>
        <div className="text-xl flex items-center space-x-5">
          <ul className="flex space-x-5">
            <li>{language === "en" ? "Home" : "হোম"}</li>
            <li>{language === "en" ? "Services" : "সেবা"}</li>
            <li>{language === "en" ? "About Us" : "আমাদের সম্পর্কে"}</li>
            <li>{language === "en" ? "Projects" : "প্রোজেক্ট"}</li>
            <li>{language === "en" ? "Contact" : "যোগাযোগ করুণ"}</li>
          </ul>
          {/* Language Switcher Dropdown */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 border rounded bg-white text-black"
          >
            <option value="en">🇬🇧 English</option>
            <option value="bn">🇧🇩 বাংলা</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;

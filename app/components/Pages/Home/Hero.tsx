"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { AiOutlineFileText } from "react-icons/ai"; // Thesis Icon
import { FaFileAlt } from "react-icons/fa"; // Reports Icon
import { MdAssignment } from "react-icons/md"; // Assignments Icon
import { FaChalkboardTeacher } from "react-icons/fa"; // Presentations Icon
import { AiOutlineLaptop } from "react-icons/ai"; // Web Projects Icon
import React from "react";
import GradientText from "../../react-bits-animations/GradientText/GradientText";

const Hero = () => {
  const { language } = useLanguage(); // Get the selected language

  return (
    <div
      className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/BannerImg.webp')" }} // Change this to your actual image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <GradientText colors={["#9EF01A", "#4079ff", "#9EF01A", "#4079ff", "#9EF01A"]}
  animationSpeed={4}
  showBorder={false}
  className="custom-class">
<h1 className="text-5xl tracking-wider font-title font-bold">
          {language === "en" ? "Welcome to CSE Academic Solutions" : "CSE Academic Solutions এ আপনাকে স্বাগতম"}
        </h1>
        </GradientText>
        
        <p className="text-xl tracking-wide w-7/12 mx-auto font-text mt-6">
          {language === "en"
            ? "We provide support for your thesis, reports, assignments, and web projects to help you succeed"
            : "আমাদের কাছে পাচ্ছেন আপনার থিসিস, রিপোর্ট, অ্যাসাইনমেন্ট এবং ওয়েব প্রোজেক্ট রিলেটেড সকল সাপোর্ট "}
        </p>
      </div>

      {/* Services Section with Icons */}
      <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-8 mb-8">
        <div className="relative flex flex-col items-center justify-center w-48 h-48 bg-blue-500 rounded-full shadow-lg text-center transition-transform duration-300 hover:scale-110">
          <AiOutlineFileText size={40} className="text-white" />
          <span className="text-white text-lg font-semibold mt-2">
            {language === "en" ? "Thesis" : "থিসিস"}
          </span>
          <p className="text-sm text-white opacity-80 mt-1 text-center">
            {language === "en" ? "Complete writing help" : "সম্পূর্ণ লেখা সহায়তা"}
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center w-48 h-48 bg-green-500 rounded-full shadow-lg text-center transition-transform duration-300 hover:scale-110">
          <FaFileAlt size={40} className="text-white" />
          <span className="text-white text-lg font-semibold mt-2">
            {language === "en" ? "Reports" : "রিপোর্ট"}
          </span>
          <p className="text-sm text-white opacity-80 mt-1 text-center">
            {language === "en" ? "Professional report help" : "প্রফেশনাল রিপোর্ট সহায়তা"}
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center w-48 h-48 bg-yellow-500 rounded-full shadow-lg text-center transition-transform duration-300 hover:scale-110">
          <MdAssignment size={40} className="text-white" />
          <span className="text-white text-lg font-semibold mt-2">
            {language === "en" ? "Assignments" : "অ্যাসাইনমেন্ট"}
          </span>
          <p className="text-sm text-white opacity-80 mt-1 text-center">
            {language === "en" ? "Get your tasks done" : "আপনার কাজ করিয়ে নিন"}
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center w-48 h-48 bg-emerald-500 rounded-full shadow-lg text-center transition-transform duration-300 hover:scale-110">
          <FaChalkboardTeacher size={40} className="text-white" />
          <span className="text-white text-lg font-semibold mt-2">
            {language === "en" ? "Presentations" : "প্রেজেন্টেশন"}
          </span>
          <p className="text-sm text-white opacity-80 mt-1 text-center">
            {language === "en" ? "Custom slides & design" : "কাস্টম স্লাইড ও ডিজাইন"}
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center w-48 h-48 bg-red-500 rounded-full shadow-lg text-center transition-transform duration-300 hover:scale-110">
          <AiOutlineLaptop size={40} className="text-white" />
          <span className="text-white text-lg font-semibold mt-2">
            {language === "en" ? "Web Projects" : "ওয়েব প্রোজেক্ট"}
          </span>
          <p className="text-sm text-white opacity-80 mt-1 text-center">
            {language === "en" ? "Full project support" : "সম্পূর্ণ প্রোজেক্ট সহায়তা"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

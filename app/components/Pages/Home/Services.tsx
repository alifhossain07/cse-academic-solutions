'use client'

import React from 'react';
import { AiOutlineFileText, AiOutlineFileSearch, AiOutlineDesktop, AiOutlineFileDone, AiOutlineLaptop } from 'react-icons/ai';
import SpotlightCard from '../../react-bits-animations/SpotlightCard/SpotlightCard';
import { useLanguage } from '@/app/context/LanguageContext';

const Services = () => {
  const { language } = useLanguage();

  return (
    <div  className='pt-44  pb-32 w-10/12 mx-auto'>
      <h1 data-aos="fade-up" className='text-4xl font-bold text-center mb-20'>
        {language === "en" ? "Our Services" : "আমাদের সেবাসমুহ"}
      </h1>

      <div data-aos="fade-up" className='flex  justify-between gap-8'>
        {/* Thesis Card */}
        <SpotlightCard className="custom-spotlight-card transition-transform duration-300 hover:scale-105" spotlightColor="rgba(26, 134, 235, 0.445)">
          <AiOutlineFileText size={40} className="text-blue-500" />
          <h2 className='text-xl font-bold mt-5 mb-3'>
            {language === "en" ? "Thesis" : "থিসিস"}
          </h2>
          <p className='text-lg'>
            {language === "en"
              ? "We provide full support for your thesis project, helping you complete it on time and accurately."
              : "আপনার থিসিস প্রোজেক্টের জন্য আমরা সম্পূর্ণ লেখা সহায়তা প্রদান করি, যাতে আপনার কাজ সঠিকভাবে এবং সময়মতো সম্পন্ন হয়।"}
          </p>
        </SpotlightCard>

        {/* Presentation Card */}
        <SpotlightCard className="custom-spotlight-card transition-transform duration-300 hover:scale-105" spotlightColor="rgba(109, 235, 26, 0.445)">
          <AiOutlineFileSearch size={40} className="text-green-500" />
          <h2 className='text-xl font-bold mt-5 mb-3'>
            {language === "en" ? "Presentation" : "প্রেজেন্টেশন"}
          </h2>
          <p className='text-lg'>
            {language === "en"
              ? "We assist you in creating and designing presentations with ease."
              : "প্রেজেন্টেশন তৈরি এবং ডিজাইন সম্পর্কিত পুরো প্রক্রিয়া আমাদের মাধ্যমে আপনি সহজেই সম্পন্ন করতে পারবেন।"}
          </p>
        </SpotlightCard>

        {/* Reports Card */}
        <SpotlightCard className="custom-spotlight-card transition-transform duration-300 hover:scale-105" spotlightColor="rgba(235, 57, 26, 0.445)">
          <AiOutlineFileDone size={40} className="text-red-500" />
          <h2 className='text-xl font-bold mt-5 mb-3'>
            {language === "en" ? "Reports" : "রিপোর্ট"}
          </h2>
          <p className='text-lg'>
            {language === "en"
              ? "We help you with your reports, from data collection to the writing process."
              : "আমরা আপনাকে আপনার রিপোর্টের জন্য সাহায্য করি, সঠিকভাবে তথ্য সংগ্রহ থেকে শুরু করে লেখার প্রক্রিয়া পর্যন্ত।"}
          </p>
        </SpotlightCard>

        {/* Assignments Card */}
        <SpotlightCard className="custom-spotlight-card transition-transform duration-300 hover:scale-105" spotlightColor="rgba(235, 186, 26, 0.445)">
          <AiOutlineDesktop size={40} className="text-yellow-500" />
          <h2 className='text-xl font-bold mt-5 mb-3'>
            {language === "en" ? "Assignments" : "অ্যাসাইনমেন্ট"}
          </h2>
          <p className='text-lg'>
            {language === "en"
              ? "We provide full solutions for your school or college assignments to help you achieve excellent results."
              : "আপনার স্কুল বা কলেজের অ্যাসাইনমেন্টের জন্য আমরা আপনাকে পুরো সলিউশন প্রদান করি, যা আপনাকে শ্রেষ্ঠ ফলাফল পেতে সহায়তা করবে।"}
          </p>
        </SpotlightCard>

        {/* Web Projects Card */}
        <SpotlightCard className="custom-spotlight-card transition-transform duration-300 hover:scale-105" spotlightColor="rgba(235, 26, 235, 0.445)">
          <AiOutlineLaptop size={40} className="text-indigo-500" />
          <h2 className='text-xl font-bold mt-5 mb-3'>
            {language === "en" ? "Web Projects" : "ওয়েব প্রোজেক্ট"}
          </h2>
          <p className='text-lg'>
            {language === "en"
              ? "We develop various web projects such as restaurant management, event management, and more."
              : "আমরা বিভিন্ন ধরনের ওয়েব প্রোজেক্ট তৈরি করি, যেমন রেস্টুরেন্ট ম্যানেজমেন্ট, ইভেন্ট ম্যানেজমেন্ট এবং আরও অনেক ধরনের সিস্টেম।"}
          </p>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default Services;

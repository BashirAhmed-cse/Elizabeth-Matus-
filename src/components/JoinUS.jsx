"use client";
import React, { useState } from "react";


import Image from "next/image";

const JoinUS = () => {








  return (
    <div className="bg-[#012647]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6   rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-800">
          {/* Left Side Content (60%) */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <section className="text-white text-center p-8 relative">
              <h2 className="text-3xl font-bold mb-6">JOIN US</h2>
              <div
                className="max-w-lg mx-auto space-y-6"
                
              >
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                 
                    className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-white focus:border-indigo-500"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                   
                    className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-white focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    
                    className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-white focus:border-indigo-500"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                   
                    className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-white focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="flex items-start gap-2 justify-start w-full">
                  <input
                    type="checkbox"
                    id="consent"
                    
                    className="hidden"
                  />
                  <label
                    htmlFor="consent"
                    className="flex items-center space-x-2 cursor-pointer select-none"
                  >
                    <div className="w-[23px] h-[23px] border-2 border-white rounded-md flex items-center justify-center">
                     
                    </div>
                    <span className="text-white text-sm">
                      By providing your phone number and checking this box, you
                      agree to receive calls and texts.
                    </span>
                  </label>
                </div>
               
               
                <button
                 
                  className="bg-white text-blue-800 font-bold px-6 py-3 mt-4 rounded-lg hover:bg-blue-800 hover:text-white"
                  
                >
                 {"I'M IN"} 
                  {/* Change button text while loading */}
                </button>
              </div>
            </section>
          </div>

          {/* Right Side Image (40%) */}
          <div className="md:col-span-2 flex justify-center items-center w-full h-[280px]   relative">
            <Image
              src="/images/logo.jpeg"
              alt="Elizabeth Matus"
              fill
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUS;

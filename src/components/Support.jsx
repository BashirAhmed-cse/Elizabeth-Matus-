import Link from 'next/link';
import React from 'react';

const Support = () => {
  return (
    <section 
      className="h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: 'url(/images/donation.jpg)' }}
    >
      <div className="text-center p-6 md:p-12  rounded-lg shadow-lg">
        <h2 className="text-lg md:text-xl text-white tracking-wide uppercase mb-2 font-semibold">
          Make A Donation
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide mb-2">
          Support Our Campaign
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide mb-6">
          Donate Today
        </h2>
        <p className="text-lg text-white tracking-wide mb-6 max-w-2xl mx-auto">
          Please consider making a donation to support our future development. 
          Your generosity helps us create meaningful change. Thank you for choosing to make a difference!
        </p>

        {/* Donate Button */}
        <button className="bg-[#FFD700] hover:bg-[#E6C200] text-[#063159] font-semibold text-lg uppercase px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
          Make a Donation
        </button>

        {/* Donation Amount Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8">
  <Link href="" className="px-6 py-3 text-white font-semibold rounded-lg shadow-md bg-[#E63946] hover:bg-[#C92D3A] transition-transform transform hover:scale-105">
    $20
  </Link>
  <Link href="" className="px-6 py-3 text-white font-semibold rounded-lg shadow-md bg-[#457B9D] hover:bg-[#346A87] transition-transform transform hover:scale-105">
    $100
  </Link>
  <Link href="" className="px-6 py-3 text-white font-semibold rounded-lg shadow-md bg-[#F4A261] hover:bg-[#E08E4F] transition-transform transform hover:scale-105">
    $250
  </Link>
  <Link href="" className="px-6 py-3 text-white font-semibold rounded-lg shadow-md bg-[#2A9D8F] hover:bg-[#20897A] transition-transform transform hover:scale-105">
    $1000
  </Link>
  <Link href="" className="px-6 py-3 text-white font-semibold rounded-lg shadow-md bg-[#FFB703] hover:bg-[#E6A202] transition-transform transform hover:scale-105">
    Other Amount
  </Link>
</div>

      </div>
    </section>
  );
};

export default Support;

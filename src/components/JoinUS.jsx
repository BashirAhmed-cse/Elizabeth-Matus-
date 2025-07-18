"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

import Image from "next/image";

const JoinUS = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // loading state

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setError(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !isChecked ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      setError(true);
      return;
    }

    setError(false);
    setLoading(true); // set loading to true

    const templateParams = {
      to_name: "Recipient Name", // Change dynamically if needed
      from_name: `${formData.firstName} ${formData.lastName}`,
      message: `Phone: ${formData.phone}\nEmail: ${formData.email}`, // Include both phone & email in message
    };

    emailjs
      .send(
        "service_nrls69g",
        "template_j932vwj",
        templateParams,
        "YQF-UpLHP18Wqm3G7"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSuccessMessage("Form submitted successfully!");
          setFormData({ firstName: "", lastName: "", email: "", phone: "" });
          setIsChecked(false);
          setLoading(false); // set loading to false once the email is sent
        },
        (error) => {
          console.error("Email sending failed:", error.text || error);
          setSuccessMessage("Failed to send. Please try again.");
          setLoading(false); // set loading to false if there's an error
        }
      );
  };

  return (
    <div id="join-us" className="bg-[#012647] scroll-mt-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6   rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-800">
          {/* Left Side Content (60%) */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <section className="text-white text-center p-8 relative">
              <h2 className="text-3xl font-bold mb-6">JOIN US</h2>
              <form
                className="max-w-lg mx-auto space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-white focus:border-indigo-500"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-white focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-white focus:border-indigo-500"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-white focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="flex items-start gap-2 justify-start w-full">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="consent"
                    className="flex items-center space-x-2 cursor-pointer select-none"
                  >
                    <div className="w-[23px] h-[23px] border-2 border-white rounded-md flex items-center justify-center">
                      {isChecked && (
                        <span className="text-white text-xl">✔</span>
                      )}
                    </div>
                    <span className="text-white text-sm">
                      By providing your phone number and checking this box, you
                      agree to receive calls and texts.
                    </span>
                  </label>
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-2">
                    Please fill in all fields and agree to the terms.
                  </p>
                )}
                {successMessage && (
                  <p className="text-green-500 text-sm mt-2">
                    {successMessage}
                  </p>
                )}
                <button
                  type="submit"
                  className="bg-white text-blue-800 font-bold px-6 py-3 mt-4 rounded-lg hover:bg-blue-800 hover:text-white"
                  disabled={loading} // Disable the button while loading
                >
                  {loading ? "Sending..." : "I'M IN"}{" "}
                  {/* Change button text while loading */}
                </button>
              </form>
            </section>
          </div>

          {/* Right Side Image (40%) */}
          <div className="md:col-span-2 flex justify-center items-center w-full h-[260px]   relative">
            <Image
              src="/images/logo.jpeg"
              alt="Elizabeth Matus"
              fill
              className="p-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUS;

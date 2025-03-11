import { useState, useEffect } from "react";
import "./hero.css";
import { FaFacebook } from "react-icons/fa";

const images = ["/images/hero.jpg", "/images/donation.jpg"];

const Hero = () => {
  const [bgImage, setBgImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prevImage) =>
        prevImage === images[0] ? images[1] : images[0]
      );
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex"
      style={{
        backgroundImage: `url(${bgImage})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="flex-1 flex items-center justify-start px-4"></div>
      <div className="flex-1 flex items-center justify-center px-4 h-screen">
        <div className="text-center text-white space-y-4 z-99">
          <h1 className="text-6xl uppercase">Your Voice,</h1>
          <h1 className="text-6xl uppercase">Your Future</h1>
          <h2 className="text-4xl">A Dallas Native Fighting for You</h2>

          <div className="flex justify-center gap-6 py-4">
            <a
              href="https://www.facebook.com/people/Elizabeth-Matus-For-Dallas-City-Council-District-5/61573062202707/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full transition-transform transform hover:scale-110"
            >
              <FaFacebook className="text-white text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

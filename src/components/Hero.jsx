import "./hero.css";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Hero = () => {
  return (
    <section id="hero" className="relative flex">
      <div className="flex-1 flex items-center justify-start px-4"></div>
      <div className="flex-1 flex items-center justify-center px-4  h-screen">
        <div className="text-center text-white space-y-4 z-99">
          <h1 className="text-6xl uppercase">Your Voice,</h1>
          <h1 className="text-6xl uppercase">Your Future</h1>
          <h2 className="text-4xl">A Dallas Native Fighting for You</h2>

          <div className="flex justify-center gap-6 py-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full transition-transform transform hover:scale-110"
            >
              <FaFacebook className="text-white text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded-full transition-transform transform hover:scale-110"
            >
              <BsTwitterX className="text-white text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

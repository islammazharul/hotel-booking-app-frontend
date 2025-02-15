import { Link } from "react-router-dom";
import HeroImg from "../assets/pexels-lorenzo-castellino-61076802-15389334.jpg";
// import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto -mt-20 md:-mt-24 lg:-mt-28">
      <div className="max-h-screen relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 bg-black/50 flex flex-col justify-center">
          <div className="p-2 md:p-5 md:ml-4 space-y-1 md:space-y-5">
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold">
              Enjoy Your
            </h1>
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-orange-500">De</span>stination
            </h1>
            <div className="w-8 h-1 md:w-24 md:h-2 bg-orange-500 md:mb-12"></div>
            <p className="text-xs lg:text-lg text-gray-200">
              Dimension of reality that makes change possible and
              <br />
              understandable. An indefinite and homogeneous environment
              <br /> in which natural events and human existence take place.
            </p>
            <div className="flex md:mt-10">
              <Link
                to="#"
                className="uppercase text-xs font-semibold p-2 md:p-3 rounded-lg bg-orange-500 text-white mr-4"
              >
                Book Now
              </Link>
              <Link
                to="#"
                className="uppercase text-xs font-semibold p-2 md:p-3 rounded-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-transparent"
              >
                Read more
              </Link>
            </div>
          </div>
          {/* <SearchBar /> */}
        </div>
        <img
          className="w-full max-h-[980px] object-cover"
          src={HeroImg}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;

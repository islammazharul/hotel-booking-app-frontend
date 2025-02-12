import { Link } from "react-router-dom";
import HeroImg from "../assets/pexels-lorenzo-castellino-61076802-15389334.jpg";
// import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto -mt-28 border-b-8 border-b-orange-500">
      <div className="max-h-[800px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 bg-black/40 flex flex-col justify-center">
          <div className="p-5 m-5 space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Enjoy Your
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-orange-500">De</span>stination
            </h1>
            <span className="w-24 h-2 bg-orange-500 mb-12"></span>
            <p className="text-sm text-gray-200">
              Dimension of reality that makes change possible and
              <br />
              understandable. An indefinite and homogeneous environment
              <br /> in which natural events and human existence take place.
            </p>
            <div className="flex mt-10">
              <Link
                to="#"
                className="uppercase py-2 px-4 rounded-lg bg-orange-500 border-1 border-transparent text-white mr-4"
              >
                Book Now
              </Link>
              <Link
                to="#"
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white"
              >
                Read more
              </Link>
            </div>
          </div>
          {/* <SearchBar /> */}
        </div>
        <img
          className="w-full max-h-[800px] object-cover"
          src={HeroImg}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;

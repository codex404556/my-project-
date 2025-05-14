import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Hotelcard = ({room, index}) => {
  return (
    <Link
      to={"/rooms/" + room._id}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="relative max-w-60 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px-4px-4px-rgpa(0,0,0,0.05)]"
    >
      <img
        src={room.images[0]}
        alt=""
        className=""
      />
      {index % 2 === 0 && <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">Best Seler</p>}
      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {room.hotel.name}
          </p>
          <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt="star-icon" /> 4.5
          </div> 
        </div>
        <div className="flex items-center gap-2 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl text-gray-800">${room.pricePerNight}</span>{" "}
            /night
          </p>
          <button className="border border-gray-300 px-4 py-2 text-sm font-medium rounded hover:bg-gray-50 transition-all cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Hotelcard;

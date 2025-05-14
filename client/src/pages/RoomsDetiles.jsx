import React, { useEffect, useState } from "react";
import { assets, facilityIcons, roomCommonData, roomsDummyData } from "../assets/assets";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";

const RoomsDetiles = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md-px-16 lg-px-24 xl:px-32">
        {/* rooms detiles */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}
            <span className="font-inter text-sm">({room.roomType})</span>
            <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
              20% OFF
            </p>
          </h1>
        </div>
        {/* room rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>
        {/* room addtess */}
        <div className="flex items-center gap-1 text-gray-800 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>
        {/* room images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              className="w-full rounded-xl shadow-lg object-cover"
              src={mainImage}
              alt="main-image"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full ">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt="image"
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === image &&
                    "outline-3 outline-orange-500 duration-300"
                  }`}
                />
              ))}
          </div>
        </div>
        {/* room hilights */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience Luxury Like never Befor
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    className="w-5 h-5"
                    src={facilityIcons[text]}
                    alt={text}
                  />
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* room price */}
          <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
        </div>
        {/* check in and check out */}
        <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
            {/* check in */}
            <div className="flex flex-col">
              <label htmlFor="checkInDate">Check-In</label>
              <input
                type="date"
                id="checkInDate"
                className="w-full border rounded border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            {/* check out */}
            <div className="border-x border-gray-300/70 px-9">
              <div className="flex flex-col">
                <label htmlFor="checkOutDate">Check-Out</label>
                <input
                  type="date"
                  id="checkOutDate"
                  className="w-full border rounded border-gray-300 px-3 py-2 mt-1.5 outline-none"
                  required
                />
              </div>
            </div>
            {/* Guests */}
            <div className="flex flex-col">
              <label htmlFor="guests">Guests</label>
              <input
                type="number"
                id="guests"
                placeholder="0"
                className="max-w-20 border rounded border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary rounded-md text-white hover:primary-dull active:scale-95 transition-all text-base cursor-pointer max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4"
          >
            Check Availability
          </button>
        </form>
        {/* common */}
        <div className="mt-25 space-y-4">
          {roomCommonData.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                className="w-6.5"
                src={item.icon}
                alt={`${item.title}-icon`}
              />
              <div className="">
                <p className="text-base">{item.title}</p>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
          <p>
            Guests Will be alocated on the ground floor according to
            availability you get a comfortiable two bedroom abartment has true
            city felling. the price qouted is for two guest, at the guest solt
            please marck the number of guests to get the excat price for groups.
            The Guests will be allocated ground folder according to availbilty.
            You get the comfotable tow bedroom apartment that has a true city
            feeling.{" "}
          </p>
        </div>
        {/* hosted by */}
        <div className="flex flex-col items-start gap-4">
            <div className="flex gap-4">
                <img className="rounded-full h-14 w-14 md:h-18 md:w-18 pb-3" src={room.hotel.owner.image} alt="Host" />
                <div className="">
                    <p className="text-lg md:text-xl">Hosted by{room.hotel.name}</p>
                    <div className="flex items-center mt-1">
                        <StarRating />
                        <p className="ml-2">200+ reviews</p>
                    </div>
                </div>
            </div>
            <button className="px-6 py-2.5 rounded text-white bg-primary hover:primary-dull active:scale-95 transition-all cursor-pointer">Connect Now</button>
        </div>
      </div>
    )
  );
};

export default RoomsDetiles;

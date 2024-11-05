// import React from 'react'

import { IoIosArrowDown } from "react-icons/io";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom"

const Details = () => {
  const location=useLocation()
  return (
    <>
      <div>
        <Navbar />
        <div className="pt-1">
          <div className="bg-white border-2 border-s-0 border-e-0 h-10 flex items-center px-3">
            <h6 className="text-[#002F34] font-sans text-sm font-bold">
              ALL CATEGORIES
            </h6>
            <IoIosArrowDown size={30} className="text-[#002F34] font-normal" />
            <div className="flex gap-x-7 px-4">
              <p className="text-sm">Cars</p>
              <p className="text-sm">Motorcycles </p>
              <p className="text-sm">Mobile Phones</p>
              <p className="text-sm">For Sale: Houses & Apartments</p>
              <p className="text-sm">Scooters</p>
              <p className="text-sm">Commercial & Other Vehicles</p>
              <p className="text-sm">For Rent: Houses & Apartments</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 flex w-[100%]">
          <div className="w-[65%] h-[10%]">
            <img className="h-[35vw] w-[100%]" src={location?.state?.data?.imgURL} alt="" />
          </div>
          <div className="ps-5">
            <div className=" h-[13vw] border w-[34vw] rounded">
              <h1 className="font-bold text-[#002F34] text-3xl px-4 py-4">
               {location?.state?.data?.price}
              </h1>
              <p className="px-8 text-[#406367]">{location?.state?.data?.name}</p>
              <p className="px-8 mt-7 text-[#406367] text-[11px]">
              {location?.state?.data?.Description}
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Details;

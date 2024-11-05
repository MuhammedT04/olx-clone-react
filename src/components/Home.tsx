// import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import  { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../Firebase";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const db = getFirestore(app);

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchData();
  }, []);

  return (
    <>
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
      <h1 className="text-[1.6rem] pt-5 px-14  text-[#002F34]">
        Fresh recommendations
      </h1>
      <div className="p-5 pt-0 flex gap-x-3 w-[100%] flex-wrap">
        {products.map((item) => (
          <div className="w-[24%] mt-5">
            {
              <Link to={"/details"} state={{data:item}}>
                <Card key={item.id}>
                  <CardHeader>
                    <div>
                      <img src={item.imgURL} alt="" />
                    </div>
                    <CardTitle className="font-medium text-2xl">
                      {item.price}
                    </CardTitle>
                    <CardDescription>2018 - 90,000 km</CardDescription>
                    <CardDescription>{item.Description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            }
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;

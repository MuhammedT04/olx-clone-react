// import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { UserAuth } from "../context/AuthContext";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState("");
  const { user, signUp, logIn, logOut, uploadimg } = UserAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = React.useState(false);

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLoging, setPasswordLogin] = useState("");

  const [emailsign, setEmailsign] = useState("");
  const [passwordsign, setPasswordsign] = useState("");

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(img,'image  dayata lsjdfslfjsf')
    event.preventDefault();
    uploadimg(
      product.name,
      product.price,
      product.description,
      user.currentUser,
      img
    );
    setOpen(false);
  };
  
  
  const dataSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await logIn(emailLogin, passwordLoging);
      } else {
        console.log("sign UP ann");
        await signUp(emailsign, passwordsign);
      }
      
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
    console.log(user);
  };
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImg(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  
  
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-[#EFF1F3] flex items-center px-4 gap-x-4 h-20 py-2">
        {
          <Link to={"/"}>
            <svg
              width="48px"
              height="48px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              fill-rule="evenodd"
            >
              <path
                className="rui-w4DG7 "
                d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
              ></path>
            </svg>
          </Link>
        }
        <div className="flex bg-white h-12 w-[21vw] items-center border-2 border-[#002F34] rounded px-1 gap-x-3 active:border-[#23E5DB]">
          <IoIosSearch size={20} />
          <input
            className="ring-0 outline-none"
            type="text"
            placeholder="India"
          />
          <FaAngleDown size={20} />
        </div>
        <div className="flex ">
          <div className="flex bg-white h-12 w-[45vw]  border-2 border-r-0 border-[#002F34] rounded rounded-e-none">
            <input
              className="ring-0 outline-none w-[100%] ps-3 focus:ring-2 focus:outline-none focus:ring-[#23E5DB] focus:rounded focus:rounded-e-none rounded-e-none"
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
            />
          </div>
          <div className="bg-[#002F34] w-[10%] flex justify-center items-center rounded rounded-s-none">
            <IoIosSearch size={28} className="text-white" />
          </div>
        </div>
        <div className="flex gap-5">
          <h1 className="font-medium text-[#002F34]">ENGLISH</h1>
          <FaAngleDown size={30} className="text-[#002F34] font-normal" />
        </div>
        <div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {user.currentUser ? (
              <h1
                onClick={handleLogout}
                className="font-medium underline cursor-pointer hover:no-underline"
              >
                Logout
              </h1>
            ) : (
              <DialogTrigger asChild>
                <h1 className="font-medium underline hover:no-underline">
                  {isLogin ? "Login" : "Signup"}
                </h1>
              </DialogTrigger>
            )}
            <DialogContent className="sm:max-w-[400px] h-[40vw]">
              <DialogHeader>
                <DialogTitle className="justify-center flex">
                  <svg
                    width="60px"
                    height="60px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    className=""
                    fill-rule="evenodd"
                  >
                    <path
                      className="rui-lquEm"
                      d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                    ></path>
                  </svg>
                </DialogTitle>
                <div className="flex justify-center pt-2">
                  <DialogDescription className="w-[22vw]">
                    <h1 className="text-[20px] font-bold text-[#002F34] text-center">
                      {isLogin
                        ? "Enter your email to login"
                        : "Create your account"}
                    </h1>
                  </DialogDescription>
                </div>
                <form onSubmit={dataSubmit}>
                  <div className="grid gap-7 py-6">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Input
                        id="email"
                        placeholder="Email"
                        className="col-span-4 h-12"
                        onChange={(e) => {
                          isLogin
                            ? setEmailLogin(e.target.value)
                            : setEmailsign(e.target.value);
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Input
                        id="password"
                        placeholder="Password"
                        className="col-span-4 h-12"
                        onChange={(e) => {
                          isLogin
                            ? setPasswordLogin(e.target.value)
                            : setPasswordsign(e.target.value);
                        }}
                      />
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        className="bg-[#002F34] text-white w-[28vw] rounded h-11"
                        onClick={() => setIsOpen(true)}
                      >
                        {isLogin ? "Login" : "Sign Up"}
                      </button>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      {isLogin && (
                        <p>
                          <input className="mr-2" type="checkbox" /> Remember me
                        </p>
                      )}
                      <p>
                        {isLogin ? "Need Help?" : "Already have an account?"}
                      </p>
                    </div>
                    <p className="text-[#002F34] font-medium">
                      {isLogin ? (
                        <span className="text-gray-600">New to OLX? </span>
                      ) : (
                        <span className="text-gray-600">
                          Already have an account?{" "}
                        </span>
                      )}
                      <span
                        className="underline cursor-pointer"
                        onClick={() => setIsLogin(!isLogin)}
                      >
                        {isLogin ? "Sign Up" : "Login"}
                      </span>
                    </p>
                  </div>
                </form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div className="relative inline-block">
              <svg
                width="104"
                height="48"
                viewBox="0 0 1603 768"
                className="w-26 h-12"
              >
                <g>
                  <path
                    className="fill-current text-white"
                    d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"
                  />
                  <path
                    className="fill-current text-[#FFCE32]"
                    d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"
                  />
                  <path
                    className="fill-current text-[#23E5DB]"
                    d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"
                  />
                  <path
                    className="fill-current text-[#3A77FF]"
                    d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"
                  />
                </g>

                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  className="fill-current text-[#002F34] text-[17rem] font-medium"
                >
                  SELL
                </text>
              </svg>

              <IoIosAdd
                className="absolute text-black top-1/2 left-0 transform -translate-y-1/2 pl-3"
                size={35}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Enter the details of the new product here. Click save when
                you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    className="col-span-3"
                    placeholder="Product name"
                    required
                    onChange={(e) => {
                      setProduct({ ...product, name: e.target.value });
                    }}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="price" className="text-right">
                    Price
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    className="col-span-3"
                    placeholder="0.00"
                    required
                    min="0"
                    step="0.01"
                    onChange={(e) => {
                      setProduct({ ...product, price: Number(e.target.value) });
                    }}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <textarea
                    id="description"
                    className="col-span-3"
                    placeholder="Product description"
                    onChange={(e) => {
                      setProduct({ ...product, description: e.target.value });
                    }}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="image" className="text-right">
                    Image
                  </Label>
                  <div className="col-span-3">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Add Product</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Navbar;

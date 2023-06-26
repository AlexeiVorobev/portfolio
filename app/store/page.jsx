"use client";
import { RiRadioButtonFill } from "react-icons/ri";
import React from "react";
import storeImg from "@/public/assets/projects/alex-store.jpg";
import Image from "next/image";
import Link from "next/link";

const days = () => {
  return (
    <div>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            className="absolute z-1 object-cover"
            src={storeImg}
            fill
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] z-10 text-white">
            <h2 className="py-2">Fashion Store</h2>
            <h3 className="">ReactJS / ExpressJS / MongoDB</h3>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quia, maxime adipisci aliquam, neque molestias asperiores officia omnis earum cum fugiat deleniti quam facilis pariatur tempora sed! Ipsa saepe quidem fugiat ducimus autem necessitatibus nemo accusamus, iure itaque, temporibus accusantium, modi commodi! Laudantium exercitationem asperiores aut est debitis maiores cumque, totam autem neque molestiae nulla reiciendis consectetur, nostrum tempore consequatur rem, perferendis ipsum. Impedit, voluptas eligendi? Provident odit, qui molestias nihil, recusandae soluta amet quas neque deserunt impedit ipsum in aperiam nobis corporis, ipsam repellat asperiores perspiciatis molestiae voluptatem quam dolorum! Quis sed quo facere quaerat corrupti amet dolorem maiores?
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1">
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="mr-1" />
              React JS
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="mr-1" />
              Express JS
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="mr-1" />
              JavaScript
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="mr-1" />
              MongoDB
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="mr-1" />
              Styled Components
            </p>
            
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="mr-1" />
              Redux Toolkit
            </p>
          </div>
          
        </div>
        <Link href='/#projects'><p className="underline cursor-pointer">Back</p></Link>
      </div>
    </div>
  );
};

export default days;

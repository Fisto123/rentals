import Image from "next/image";
import React from "react";

const Guaranteed = () => {
  return (
    <div
      id="about"
      className=" max-w-[1240px] md:h-[90vh] py-16 mx-auto items-center text-center mt-20 "
    >
      <div className="grid md:grid-cols-2 gap-7">
        <div className="flex flex-col w-full p-10">
          <h3 className="font-bold text-4xl text-black">Quality Guaranteed</h3>
          <h4 className=" text-black py-6  text-center justify-center text-2xl ">
            Here is an example with one single photo displayed on the right.
          </h4>

          <p className="py-3 text-xl tracking-wider text-black font-bold">
            Here is some dummy text. Hover over me! This is an demo tooltip!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vero
            voluptas delectus explicabo maxime ad qui incidunt! Saepe.
          </p>
          <button className="bg-yellow-400 p-5 w-1/2 text-center items-center m-auto text-xl text-black font-bold rounded-lg">
            More infomation
          </button>
        </div>
        <div className="bg-yellow-400">
          <div className="h-full">
            <Image
              src="/../public/assets/car4.jpg"
              width={300}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guaranteed;

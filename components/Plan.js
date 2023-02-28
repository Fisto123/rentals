import Image from "next/image";
import React from "react";

const Plan = () => {
  return (
    <div className="grid md:grid-cols-2 py-20 p-6 md:h-screen bg-yellow-600  w-full ">
      <div className="mx-auto items-center justify-center h-full w-full ">
        <div className="mt-20  bg-white p-10 w-3/4 m-auto ">
          <div className="flex flex-col">
            <select
              name=""
              id=""
              className=" shadow-xl text-black p-4 border-2 border-black m-auto w-full "
            >
              <option value="" className="font-bold text-center">
                SELECT YOUR CAR TYPE
              </option>
              <option value="">VV PASAT VC</option>
              <option value="">MERCEDEZ BENZ 100M</option>
              <option value="">TOYOTA CAMRY 16</option>
              <option value="">RANGE ROVERS 2017</option>
            </select>
          </div>
          <div className=" flex  justify-between w-full shadow-xl px-7 p-4 border-2 border-black m-auto mt-2 ">
            <div className=" w-[90px] h-full text-base uppercase border-r border-rose-300 mr-1 text-black ">
              Pickup
            </div>
            <div>
              <select
                name=""
                id=""
                className=" items-start text-xl text-black w-full"
              >
                <option value="" className="text-xl ">
                  Pick location
                </option>
                <option value="" className="text-xl ">
                  Lagos state, Ketu in Ikeja
                </option>
                <option value="" className="text-xl">
                  Ibadan, Oyo state Nigeria
                </option>
                <option value="" className="text-xl">
                  Mokola round about, Ibadan
                </option>
                <option value="" className="text-xl">
                  Katsina way, katsina road
                </option>
              </select>
            </div>
          </div>
          <div className=" flex  justify-between w-full shadow-xl px-7 p-4 border-2 border-black m-auto mt-2 ">
            <div className=" w-full h-full text-base uppercase border-r border-rose-300 mr-1 text-black ">
              Drop-off
            </div>
            <div>
              <select
                name=""
                id=""
                className="  items-start text-xl text-black w-full"
              >
                <option value="" className="text-xl ">
                  Pick location
                </option>
                <option value="" className="text-xl ">
                  Lagos state, Ketu in Ikeja
                </option>
                <option value="" className="text-xl">
                  Ibadan, Oyo state Nigeria
                </option>
                <option value="" className="text-xl">
                  Mokola round about, Ibadan
                </option>
                <option value="" className="text-xl">
                  Katsina way, katsina road
                </option>
              </select>
            </div>
          </div>
          <div className=" flex  justify-between w-full shadow-xl px-7 p-5 border-2 border-black m-auto mt-2 ">
            <div className=" w-[80px] h-full text-base uppercase border-r border-rose-300 mr-1 text-black ">
              pickup
            </div>
            <div>
              <input
                type="date"
                name=""
                id=""
                className="w-[200px] text-black text-start"
              />
            </div>
          </div>
          <div className=" flex  justify-between w-full shadow-xl px-7 p-5 border-2 border-black m-auto mt-2 ">
            <div className=" w-[90px] h-full text-base uppercase border-r border-rose-300 mr-1 text-black ">
              drop-of
            </div>
            <div>
              <input
                type="date"
                name=""
                id=""
                className="w-[200px] text-black"
              />
            </div>
          </div>
          <button className="bg-yellow-600 rounded-xl mt-3 p-4 w-full text-white font-bold">
            CONTINUE RESERVATION
          </button>
        </div>
      </div>
      <div className="hidden md:block w-full mt-10">
        <div className="h-full">
          <Image
            src="/../public/assets/car1.jpg"
            width={300}
            height={100}
            className="w-full h-[70vh] mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Plan;

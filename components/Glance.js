import Image from "next/image";
import React, { useState } from "react";

const Glance = () => {
  const vehicles = [
    {
      id: 0,
      name: "VW Golf VII",
      image: "/../public/assets/vehicle3.jpg",
      Price: "$ 37.40 rent per day",
      Model: "	Limousine",
      Doors: 4,
      Seat: 4,
      Luggage: "2 Suitcases / 2 Bags",
      Air_conditioning: "yes",
      Minimum_Age: "26 years",
    },
    {
      id: 1,
      name: "Audi A1 S-LINE",
      image: "/../public/assets/car1.jpg",
      Price: "$ 27.40 rent per day",
      Model: "	Toyota Camry",
      Doors: 5,
      Seat: 2,
      Luggage: "1 Suitcase / 20 Bags",
      Air_conditioning: "No",
      Minimum_Age: "35 years",
    },
    {
      id: 2,
      name: "BMW 320 ModernLine",
      image: "/../public/assets/car2.jpg",
      Price: "$ 57.40 rent per day",
      Model: "	Limousine",
      Doors: 4,
      Seat: 4,
      Luggage: "6 Suitcases / 3 Bags",
      Air_conditioning: "yes",
      Minimum_Age: "45 years",
    },
    {
      id: 3,
      name: "Mercedes-Benz GLK",
      image: "/../public/assets/car3.webp",
      Price: "$ 37.40 rent per day",
      Model: "	Limousine",
      Doors: 6,
      Seat: 5,
      Luggage: "20 Suitcases / 7 Bags",
      Air_conditioning: "yes",
      Minimum_Age: "5 years",
    },
    {
      id: 4,
      name: "Range Rovers GLK",
      image: "/../public/assets/car4.jpg",
      Price: "$ 37.40 rent per day",
      Model: "	Limousine",
      Doors: 14,
      Seat: 40,
      Luggage: "2 Suitcases / 2 Bags",
      Air_conditioning: "no",
      Minimum_Age: "55 years",
    },
    {
      id: 5,
      name: "Ijapa Nigerian",
      image: "/../public/assets/car1.jpg",
      Price: "$ 17.40 rent per day",
      Model: "	Limousine",
      Doors: 1,
      Seat: 2,
      Luggage: "No Lugagge",
      Air_conditioning: "no",
      Minimum_Age: "105 years",
    },
  ];
  const [id, setId] = useState(0);
  const handleClick = (id) => {
    setId(id);
  };
  return (
    <div
      id="vehicle"
      className="text-black mx-auto text-center lg:h-[70vh] max-w-[1100px] py-10"
    >
      <h2 className=" font-extrabold text-5xl p-5 text-gray-600 ">
        Vehicle Models - Our rental fleet at a glance
      </h2>
      <div className="grid md:grid-cols-6 gap-10">
        <div className="bg-white col-span-2">
          <div className="flex flex-col ">
            {vehicles.map((vehicle) => (
              <div className="flex flex-col w-full ">
                <h2
                  key={vehicle.id}
                  onClick={() => handleClick(vehicle.id)}
                  className=" bg-slate-200 font-bold hover:bg-yellow-400 cursor-pointer p-5  border-b border-cyan-100 text-gray-600 col-span-2 w-full  "
                >
                  {vehicle.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className=" col-span-2">
          <div>
            <Image
              src={vehicles[id].image}
              width={300}
              height={100}
              alt="img"
              className="m-auto h-[40vh] hover:scale-105 ease-in duration-300 justify-center text-center py-10 w-full "
            />
          </div>
        </div>
        <div className="bg-white shadow-xl col-span-2 ">
          <div className="bg-yellow-600 p-3 text-white text-2xl">
            {vehicles[0].Price}
          </div>
          <div className="flex flex-row justify-between p-4 border-b border-yellow-200 ">
            <h3 className=" ">Model</h3>
            <h3 className=" items-center text-center ">{vehicles[id].Model}</h3>
          </div>
          <div className="flex flex-row justify-between p-4 border-b border-yellow-200 ">
            <h3 className=" ">Doors</h3>
            <h3 className="text-center ">{vehicles[id].Doors}</h3>
          </div>
          <div className="flex flex-row justify-between p-4 border-b border-yellow-200 ">
            <h3 className=" ">Seats</h3>
            <h3 className="text-center ">{vehicles[id].Seat}</h3>
          </div>
          <div className="flex flex-row justify-between p-4 border-b border-yellow-200 ">
            <h3 className=" ">Luggage</h3>
            <h3 className="">{vehicles[id].Luggage}</h3>
          </div>
          <div className="flex flex-row justify-between p-4 border-b border-yellow-200 ">
            <h3 className=" ">Air Conditioning</h3>
            <h3 className="text-center ">{vehicles[id].Air_conditioning}</h3>
          </div>
          <div className="flex flex-row justify-between p-4 border-b border-yellow-200 ">
            <h3 className=" ">Minimum Age</h3>
            <h3 className="text-center  ">{vehicles[id].Minimum_Age}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glance;

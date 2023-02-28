import Image from "next/image";
import React from "react";
import trump from "../public/assets/trump.jpg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="text-black md:h-screen mx-auto  max-w-[1300px] items-center py-10"
    >
      <h3 className="font-bold text-4xl text-left ">Contact Us</h3>
      <h3 className="text-2xl py-3 font-semibold ">
        You have any questions or need additional information?
      </h3>
      <div className="grid md:grid-cols-4 py-10 gap-1">
        <div className="flex flex-col col-span-2 p-4">
          <div className="flex flex-row w-full gap-2">
            <input
              type="text"
              placeholder="First Name"
              className=" font-bold text-xl w-full focus:outline-rose-500 shadow-xl p-4 border-2 rounded-md bg-slate-100  "
            />
            <input
              type="text"
              placeholder="Last Name"
              className="font-bold text-xl w-full bg-slate-100  focus:outline-rose-500 shadow-xl p-4 border-2 rounded-md "
            />
          </div>
          <div className="flex flex-row w-full gap-2 py-4">
            <input
              type="number"
              placeholder="Telephone"
              className=" font-bold text-xl w-full focus:outline-rose-500 shadow-xl p-4 border-2 rounded-md bg-slate-100  "
            />
            <input
              type="email"
              placeholder="Email"
              className="font-bold text-xl w-full bg-slate-100  focus:outline-rose-500 shadow-xl p-4 border-2 rounded-md "
            />
          </div>
          <div>
            <textarea
              className=" font-bold text-xl w-full focus:outline-rose-500 shadow-xl p-4 border-1 rounded-md bg-slate-100  "
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            />
          </div>
          <button className="py-4 bg-yellow-300 w-1/2 text-center m-auto rounded-md font-bold text-xl text-white hover:bg-yellow-600 ">
            SUBMIT MESSAGE
          </button>
        </div>

        <div className="col-span-2  p-5 w-full text-center items-center gap-8">
          <div className="w-full shadow-lg">
            <div className="flex">
              <Image src={trump} width={300} height={100} />
              <div className="flex flex-col p-4">
                <h5 className="w-full  text-black text-xl py-10">
                  IYIOLA OLUWAFISAYO
                </h5>
                <h5 className="w-full  text-black text-xl py-2">
                  PLEASE CONTACT ME
                </h5>
                <div className="flex justify-between gap-4">
                  <p className="font-extrabold text-xl">Email</p>{" "}
                  <span className="font-bold py-0.5 text-lg">
                    iyiolafisayo@gmail.com
                  </span>
                </div>
                <div className="flex justify-between gap-4 py-5">
                  <p className="font-extrabold text-xl">Name</p>{" "}
                  <span className="font-bold py-0.5 text-lg">
                    iyiola Oluwafisayo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

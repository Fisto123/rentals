import React from "react";

const InfoTour = () => {
  return (
    <div className="text-black md:h-screen mx-auto max-w-[1300px] text-center py-20">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="  ">
          <video controls className="w-full h-[50vh] z-0 opacity-5 ">
            <source src="..Videos/video1.mp4" type="video/mp4" />
          </video>
          {/* <source src="https://www.youtube.com/watch?v=AjaGmTVBIfI"></source> */}
        </div>
        <div className="">
          <h2 className="font-bold text-4xl text-left px-2">
            Watch our info tour
          </h2>
          <h3 className="text-gray-600 text-3xl p-4 text-left py-3">
            You can also show youtube videos in this section!
          </h3>
          <p className="text-left p-4 text-2xl">
            Here is some dummy text. Lorem ipsum dolor sit amet, This is an
            labeled text snippet!, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <p className="text-left p-4 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vero
            voluptas delectus explicabo maxime ad qui incidunt! no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoTour;

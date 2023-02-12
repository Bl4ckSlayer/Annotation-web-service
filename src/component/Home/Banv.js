import React from "react";
import { Helmet } from "react-helmet";

const Banv = () => {
  return (
    <div className="mb-6 mt-6 ">
      <div className=" text-center p-8">
        <h1 className="  font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 p-2 hover:bg-gradient-to-l from-blue-500 to-purple-500 ">
          VIDEO
        </h1>
        <h1 className=" text-success  mt-4 text-3xl font-bold">
          See how it works in action
        </h1>
        <h1 className="   mt-4 text-xl font-bold">
          A video is worth a thousand words, don’t you think?
        </h1>
        <progress
          className="progress w-40  progress-primary mx-auto mb-4 mt-2 "
          value="100"
          max="100"
        ></progress>
      </div>
      <div className="mx-auto flex justify-center" data-aos="fade-right">
        <iframe
          className=" w-3/4 lg:h-[80vh] cover"
          src="https://www.youtube.com/embed/rRI9enxZaXw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Banv;

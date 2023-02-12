import React from "react";
import a1 from "../../Assets/img2/a1.jpg";
import a2 from "../../Assets/img2/a2.png";
import a3 from "../../Assets/img2/a3.jpg";
import b3 from "../../Assets/img2/b3.png";
import b2 from "../../Assets/img2/b2.png";
import b1 from "../../Assets/img2/b1.png";

const Cservice = () => {
  return (
    <div
      className=" lg:mt-22 flex justify-center items-center mx-auto my-auto "
      data-aos="fade-down"
    >
      <div>
        <div className=" text-center my-auto p-6">
          <h1 className="   font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 p-2 hover:bg-gradient-to-l from-blue-500 to-purple-500">
            Customer Stories
          </h1>
          <progress
            className="progress w-40  progress-primary mx-auto mb-16 mt-4 "
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="lg:flex justify-center lg:gap-6 mx-auto my-auto  ">
          <div className="card lg:w-96  w-72 bg-base-300 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300 mb-10 ">
            <figure>
              <img src={a1} alt="Shoes" />
            </figure>
            <div className="mx-auto -mt-6">
              <img src={b3} alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title text-center">
                How Finning Automates Efficient & Secure QA
              </h2>
              <div className="font-thin text-sm">
                <p>
                  “With ObservePoint, I’m able to reassure stakeholders that
                  errors won’t pop up and that the integrity of their reports
                  will be sound.”
                </p>

                <p className="text-end">- Head of Global</p>
              </div>

              <div className="card-actions justify-end">
                <p className="font-thin text-sm underline text-warning">
                  Read Story
                </p>
              </div>
            </div>
          </div>
          <div className="card transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300 lg:w-96  w-72 bg-base-300 shadow-2xl z-20 lg:-ml-10 lg:-mt-10 lg:-mr-10 mb-16 ">
            <figure>
              <img src={a2} alt="Shoes" />
            </figure>
            <div className="mx-auto -mt-6">
              <img src={b2} alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title text-center">
                How HPE Cleaned Up Their Website Data
              </h2>
              <div className="font-thin text-sm">
                <p>
                  “There are so many ways that things can go wrong. ObservePoint
                  gives us a way to make sure things get done and stay in
                  place.”
                </p>

                <p className="text-end">- Head of Global</p>
                <p className="text-end">Marketing Technology</p>
              </div>
              <div className="card-actions justify-end">
                <p className="font-thin text-sm underline text-warning">
                  Read Story
                </p>
              </div>
            </div>
          </div>
          <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300 card lg:w-96  w-72 bg-base-300 shadow-xl mb-10">
            <figure>
              <img src={a3} alt="Shoes" />
            </figure>
            <div className="mx-auto -mt-6">
              <img src={b1} alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title text-center">
                How Carnival Made a Smooth MarTech Migration
              </h2>
              <div className="font-thin text-sm">
                <p>
                  “ObservePoint has been really central to our success here at
                  Carnival since the beginning.”
                </p>
                <div className="text-end">
                  <p>- Head of Global</p>
                  <p>Marketing Technology</p>
                </div>
              </div>

              <div className="card-actions justify-end">
                <p className="font-thin text-sm underline text-warning">
                  Read Story
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cservice;

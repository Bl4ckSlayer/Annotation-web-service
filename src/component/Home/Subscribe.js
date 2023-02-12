import React from "react";

const Subscribe = () => {
  return (
    <div className="grid lg:w-2/4 mx-auto ">
      <div className="indicator w-2/4 mx-auto ">
        <div className="indicator-item indicator-bottom">
          <button className="btn btn-primary bg-gradient-to-r border-0 from-purple-400 to-pink-600 p-2 hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-500">
            Subscribe Now!!!
          </button>
        </div>
        <div className="card border ">
          <div className="card-body  bg-gradient-to-r from-primary to-accent rounded-2xl">
            <label className="swap grid justify-start swap-active text-6xl">
              <div className="swap-on">🥳</div>
            </label>
            <h2 className="text-xl font-bold text-rose-400">
              Supervisely adapts for you
            </h2>

            <p>
              Built as OS for computer vision, Supervisely runs on Apps that're
              easily created or tailored to fit your needs. Custom labeling UIs
              ur developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

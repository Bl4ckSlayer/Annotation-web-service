import React, { useRef, useState } from "react";

import Modal from "react-modal";
// Modal.setAppElement("#root");

const VideoAnnoter = () => {
  const [video, setVideo] = useState(null);
  const [annotations, setAnnotations] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [annotationCoords, setAnnotationCoords] = useState({ x: 0, y: 0 });
  const [newAnnotationText, setNewAnnotationText] = useState("");
  const [currentAnnotationTime, setCurrentAnnotationTime] = useState(0);
  const videoRef = useRef(null);

  const handleVideoChange = (event) => {
    setVideo(URL.createObjectURL(event.target?.files[0]));
  };

  const handleVideoClick = (event) => {
    const boundingRect = event.target.getBoundingClientRect();
    const x = event.clientX - boundingRect.left;
    const y = event.clientY - boundingRect.top;
    const tt = videoRef.current.currentTime;

    const hours = Math.floor(tt / 3600);
    const minutes = Math.floor((tt % 3600) / 60);
    const secs = Math.floor(tt % 60);
    const tim = [hours, minutes, secs];

    setCurrentAnnotationTime(tim);
    setAnnotationCoords({ x, y });
    setModalIsOpen(true);
  };

  const handleAnnotationSubmit = (event) => {
    event.preventDefault();
    const newAnnotation = {
      x: annotationCoords?.x,
      y: annotationCoords?.y,
      time: currentAnnotationTime,
      text: newAnnotationText,
    };
    setAnnotations([...annotations, newAnnotation]);
    setNewAnnotationText("");
    setModalIsOpen(false);
  };
  const handleAnnotationDelete = (id) => {
    console.log(id);
    // const filteredAnnotations = annotations.filter(
    //   (annotation) => annotation.index !== id
    // );
    setAnnotations([...annotations.slice(0, id), ...annotations.slice(id + 1)]);
    // console.log(annotations, id);
  };

  return (
    <section className=" bg-neutral my-20 items-center text-center ">
      <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 p-2 hover:bg-gradient-to-l from-blue-500 to-purple-500">
        Try Our Video Annotation Tools for free
      </h1>

      <progress
        className="progress w-40  progress-primary mx-auto mt-6  "
        value="100"
        max="100"
      ></progress>
      <div className=" px-6 py-8   ">
        <div className="items-center grid  content-center text-center justify-center my-auto ">
          <h2 className="text-white p-4">Select a Video for Annotation:</h2>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="file-input file-input-bordered file-input-primary w-full max-w-xs mx-auto "
          />
          {video && (
            <div style={{ position: "relative" }}>
              <video
                className="mt-6"
                src={video}
                width="600"
                height="400"
                ref={videoRef}
                onClick={handleVideoClick}
                controls
              />
              {annotations.map((annotation, index) => (
                <span
                  key={index}
                  style={{
                    position: "absolute",
                    left: annotation?.x,
                    top: annotation?.y,
                    backgroundColor: "red",
                    color: "black",
                    padding: ".2rem",
                    borderRadius: " 5px",
                    fontWeight: "bold",
                  }}
                >
                  {annotation?.text}
                </span>
              ))}

              <Modal
                className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto "
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Add Annotation Modal"
              >
                <form onSubmit={handleAnnotationSubmit}>
                  <label>
                    <h1 className="text-2xl font-bold text-black mb-4">
                      New Annotation:{" "}
                    </h1>
                    <input
                      className="input input-bordered   w-full max-w-xs"
                      type="text"
                      value={newAnnotationText}
                      onChange={(e) => setNewAnnotationText(e.target.value)}
                    />
                  </label>
                  <button
                    className="px-4 py-2 mt-4 bg-red-500 text-white rounded hover:bg-red-700"
                    type="submit"
                  >
                    Add Annotation
                  </button>
                </form>
              </Modal>
            </div>
          )}
        </div>

        <div className=" text-start text-success card w-1/4 grid lg:grid-cols-2 gap-4  mx-auto mt-4">
          {annotations?.length > 0 &&
            annotations.map((annotation, index) => (
              <ul className=" border rounded-lg border-primary p-2" key={index}>
                <ul>
                  Description:{" "}
                  <span className="text-warning">{annotation?.text}</span>
                </ul>
                <ul className="text-sm">
                  Coordinate (X,Y) : (<span>{annotation?.x}</span>,
                  <span>{annotation?.y}</span>)
                </ul>

                <ul>
                  Time: <span>{annotation?.time[0]}h</span>:
                  <span>{annotation?.time[1]}m</span>:
                  <span>{annotation?.time[2]}s</span>
                </ul>

                <button
                  className="badge badge-error gap-2 m-2  "
                  onClick={() => handleAnnotationDelete(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  Delete
                </button>
              </ul>
            ))}
        </div>
      </div>
    </section>
  );
};

export default VideoAnnoter;

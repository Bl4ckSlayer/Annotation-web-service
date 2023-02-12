export const Banner = () => {
  return (
    <div className="hero lg:h-[80vh] bg-secondary text-white relative">
      <div className="hero-content flex-col lg:flex-row">
        <div data-aos="fade-right">
          <h1
            className="text-5xl lg:text-6xl font-bold "
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            A complete solution for annotation
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="900"
            className="py-6 max-w-5xl"
          >
            Label hours-long videos without cutting them into images. In your
            browser, with multi-track timeline, built-in object tracking and
            segments tagging tools.
          </p>
          <button className="btn bg-gradient-to-r border-0 from-[#F1C9EC] to-[#AB84CB] hover:from-[#AB84CB] hover:to-white text-black  ">
            Try Online Free
          </button>
        </div>
        <div className="h-70vh shrink-0 lg:w-2/4 w-auto" data-aos="fade-left">
          <video
            className=""
            autoPlay
            controls
            src="https://cdn.supervise.ly/videos/video-hero.f7a8ecb.webm"
          />
        </div>
      </div>
    </div>
  );
};

import Helmet from "react-helmet";
import { Banner } from "./Banner";
import ImageAnnoter from "./ImageAnnoter";
import VideoAnnoter from "./VideoAnnoter";
import { BusinessSummary } from "./BusinessSummary";
import Ban2 from "./Ban2";
import Banv from "./Banv";
import Cservice from "./Cservice";

export const Home = () => {
  return (
    <div className="mb-24">
      <Helmet>
        <title>Home | Annotation AI</title>
      </Helmet>
      <Banner />
      <Banv></Banv>
      <VideoAnnoter></VideoAnnoter>
      <ImageAnnoter></ImageAnnoter>
      <Cservice></Cservice>
      <Ban2></Ban2>

      <BusinessSummary></BusinessSummary>
    </div>
  );
};

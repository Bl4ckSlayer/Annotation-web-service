import { RiInstagramFill } from "react-icons/ri";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <div className="footer p-10 bg-neutral  text-white">
        <div className="mx-auto">
          <p className="text-5xl">Annotation AI</p>
          <div className="text-center">
            <p>Chittagong, Bangladesh</p>
            <p>+(880) 1778-120603</p>
            <p>amirulislamtajbid@gmail.com</p>
          </div>
          <div className="flex">
            <TiSocialFacebook
              className="text-4xl mr-8 hover:text-secondary"
              style={{ cursor: "pointer" }}
            />
            <RiInstagramFill
              className="text-4xl mr-2 hover:text-error"
              style={{ cursor: "pointer" }}
            />
            <TiSocialTwitter
              className="text-4xl ml-4 hover:text-info"
              style={{ cursor: "pointer" }}
            />
            <TiSocialYoutube
              className="text-4xl ml-8 hover:text-red-700"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Services</span>
          <NavLink to="" className="link link-hover">
            Branding
          </NavLink>
          <NavLink to="" className="link link-hover">
            Design
          </NavLink>
          <NavLink to="" className="link link-hover">
            Marketing
          </NavLink>
          <NavLink to="" className="link link-hover">
            Advertisement
          </NavLink>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Company</span>
          <NavLink to="" className="link link-hover">
            Home
          </NavLink>
          <NavLink to="" className="link link-hover">
            About us
          </NavLink>
          <NavLink to="" className="link link-hover">
            Contact
          </NavLink>
          <NavLink to="" className="link link-hover">
            Blogs
          </NavLink>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Legal</span>
          <NavLink to="" className="link link-hover">
            Terms of use
          </NavLink>
          <NavLink to="" className="link link-hover">
            Privacy policy
          </NavLink>
          <NavLink to="" className="link link-hover">
            Cookie policy
          </NavLink>
        </div>
      </div>
      <div className="row text-center text-white bg-neutral pb-5">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-warning">Annotation AI</span> All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

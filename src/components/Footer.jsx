import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import "../App.css";

import footerContact from "../api/footerContact.json";

export const Footer = () => {
  const iconMap = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPLus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="grid grid-three-cols">
          {footerContact.map((curData) => {
            const { icon, title, details } = curData;
            return (
              <>
                <div className="footer-contact">
                  <div className="icon">{iconMap[icon]}</div>
                  <div className="footer-contact-text">
                    <p>{title}</p>
                    <p>{details}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="copyright-area">
        <p>
          &copy; 2025 | Created and Developed with 💓 by{" "}
          <span>Deepak Sinha</span>
        </p>
      </div>
    </footer>
  );
};

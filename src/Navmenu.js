import React, { useEffect, useState } from "react";
import "./Navmenu.css";

const Navmenu = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navMenu ${show && "navMenu_black"}`}>
      <img
        className="navMenu_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="navMenu_avatar"
        src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1"
        alt="Profile Avatar"
      />
    </div>
  );
};

export default Navmenu;

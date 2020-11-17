import React, { useEffect, useState } from "react";
import "./Navmenu.css";
import { IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  CardGiftcard,
  Notifications,
  Search,
} from "@material-ui/icons";

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
      <div className="navMenu_options">
        <img
          className="navMenu_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <h4 style={{ color: "white", margin: "15px", fontWeight: "700" }}>
          Home
        </h4>
        <h4 style={{ color: "white", margin: "15px", fontWeight: "400" }}>
          TV Shows
        </h4>
        <h4 style={{ color: "white", margin: "15px", fontWeight: "400" }}>
          Movies
        </h4>
        <h4 style={{ color: "white", margin: "15px", fontWeight: "400" }}>
          New & Popular
        </h4>
        <h4 style={{ color: "white", margin: "15px", fontWeight: "400" }}>
          My List
        </h4>
      </div>

      <div className="navMenu_profile">
        <div className="navMenu_profile_av">
          <IconButton>
            <Search style={{ color: "white", fontSize: "30px" }} />
          </IconButton>
          <h4 style={{ color: "white", margin: "15px", fontWeight: "400" }}>
            KIDS
          </h4>
          <h4 style={{ color: "white", margin: "15px", fontWeight: "400" }}>
            DVD
          </h4>
          <IconButton>
            <CardGiftcard style={{ color: "white", fontSize: "30px" }} />
          </IconButton>
          <IconButton>
            <Notifications style={{ color: "white", fontSize: "30px" }} />
          </IconButton>
          <img
            className="navMenu_avatar"
            src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1"
            alt="Profile Avatar"
          />
          <IconButton>
            <ArrowDropDown style={{ color: "white", fontSize: "30px" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;

import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";
import Typing from "react-typing-animation";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaBlogger,
} from "react-icons/fa";

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="landing" style={{ position: "relative" }}>
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{
            backgroundColor: theme.primary,
          }}
        >
          <div
            className="landing--container-left"
            style={{
              backgroundImage: "url(/wordpress-development.svg)",
              backgroundSize: "63%, 50vh",
              backgroundPosition: "left",
              width: "100%",
              height: "100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="lcl--content">
              {socialsData.linkedIn && (
                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                  <FaLinkedin
                    className="landing--social"
                    style={{ color: theme.secondary }}
                    aria-label="LinkedIn"
                  />
                </a>
              )}
              {socialsData.github && (
                <a href={socialsData.github} target="_blank" rel="noreferrer">
                  <FaGithub
                    className="landing--social"
                    style={{ color: theme.secondary }}
                    aria-label="GitHub"
                  />
                </a>
              )}
              {socialsData.twitter && (
                <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                  <FaTwitter
                    className="landing--social"
                    style={{ color: theme.secondary }}
                    aria-label="Twitter"
                  />
                </a>
              )}
              {socialsData.youtube && (
                <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                  <FaYoutube
                    className="landing--social"
                    style={{ color: theme.secondary }}
                    aria-label="YouTube"
                  />
                </a>
              )}
              {socialsData.blogger && (
                <a href={socialsData.blogger} target="_blank" rel="noreferrer">
                  <FaBlogger
                    className="landing--social"
                    style={{ color: theme.secondary }}
                    aria-label="Blogger"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
        <img
          src={headerData.image}
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <Typing loop={true}>
              <Typing.Speed ms={20} />
              <h6>{headerData.title}</h6>
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={35} />
              <h6>{headerData.title_blockchain}</h6>
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={32} />
              <h6>{headerData.title_snowboarder}</h6>
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={11} />
            </Typing>

            <h1>{headerData.name}</h1>

            <p>{headerData.description}</p>

            <p>{headerData.description2}</p>

            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className={classes.resumeBtn}>Download CV</Button>
                </a>
              )}
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <Button className={classes.contactBtn}>Contact</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

import React from "react";
import { Helmet } from "react-helmet";
import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>
      {/* <MouseParticles
        g={1}
        color="random"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={3}
      /> */}
      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievement />
      <Services />
      <Testimonials />
      <Blog />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;

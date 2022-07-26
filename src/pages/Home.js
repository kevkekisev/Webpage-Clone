import React from "react";
import Navbar from "../components/Navbar";
import Expertise from "../components/Expertise";
import Footer from "../components/Footer";
import FrontSlide from "../components/FrontSlide";
import NewsLetter from "../components/NewsLetter";
import SecondSlide from "../components/SecondSlide";
import Technologies from "../components/Technologies";

import "../index.css";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <FrontSlide />
      <SecondSlide />
      <Expertise />
      <Technologies />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;

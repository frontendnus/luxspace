import React from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import JustArrived from "parts/HomePage/JustArrived";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import Clients from "parts/Clients";
import Sitemap from "parts/HomePage/Sitemap";
import Footer from "parts/Footer";

const HomePage = props => {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
};

export default HomePage;

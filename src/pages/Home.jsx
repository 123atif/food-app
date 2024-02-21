import React from "react";
import HeroSection from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Product from "../components/Product";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Menu />
      <Product />
      <Reviews />
      <Contact />
      <Blogs />
    </>
  );
};

export default Home;

import React from "react";
import HeroSection from "../components/home/Hero";
import About from "../components/home/About";
import Menu from "../components/home/Menu";
import Product from "../components/home/Product";
import Reviews from "../components/home/Reviews";
import Contact from "../components/home/Contact";
import Blogs from "../components/home/Blogs";

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
